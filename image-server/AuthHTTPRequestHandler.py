from http.server import SimpleHTTPRequestHandler
import base64
import json
import requests
import configparser
from time_utils import *
import os
import os.path as osp


# Inspired by the work at
#   - https://github.com/tianhuil/SimpleHTTPAuthServer/blob/master/SimpleHTTPAuthServer
#   - https://gist.github.com/dragermrb/108158f5a284b5fba806
class AuthHTTPRequestHandler(SimpleHTTPRequestHandler):
    # Customized the above work to fit the need of this project
    # The customized one uses OAuth 2.0 Bearer Token (https://tools.ietf.org/html/rfc6750#section-2.1)
    
    EXPIRATION_TIME = 3600
    authenticate_users_table = {}

    def do_HEAD(self):
        print("send header")
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
    

    def do_BASIC_AUTH_HEAD(self):
        print("send basic auth header")
        self.send_response(401)
        self.send_header('WWW-Authenticate', 'Basic realm=\"Lifelog\"')
        self.send_header('Content-type', 'text/html')
        self.end_headers()


    def do_BEARER_AUTH_HEAD(self):
        print("send bearer auth header")
        self.send_response(401)
        self.send_header('WWW-Authenticate', 'Bearer realm=\"Lifelog\"')
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()


    def __get_config(self):
        parser = configparser.ConfigParser()
        config_path = osp.join(osp.dirname(osp.abspath(__file__)), 'config.ini')
        parser.read(config_path)
        return parser['MAIN_SERVER']['URL']


    def __get_cross_server_auth_url(self):
        main_server_url = self.__get_config()
        return f"{main_server_url}/customed-auth/cross-server-auth"


    def __basic_auth_processing(self, auth_key): 
        second_auth_info = base64.b64decode(auth_key).decode('ascii')
        username, password = second_auth_info.split(':')
        try:
            if is_time_expired(self.authenticate_users_table[username]) == False:
                SimpleHTTPRequestHandler.do_GET(self)
            else:
                del self.authenticate_users_table[username]
                raise KeyError
        except KeyError:
            # Send back to main server for authentication
            auth_url = self.__get_cross_server_auth_url()
            data = {
                'username': username,
                'password': password,
            }
            response = requests.post(auth_url, data)
            if response.status_code == requests.codes.ok:
                self.authenticate_users_table[username] = generate_expiration_time(self.EXPIRATION_TIME)
                SimpleHTTPRequestHandler.do_GET(self)
            else:
                self.do_BASIC_AUTH_HEAD()
                self.wfile.write(bytes('No Authentication Header Received', 'utf-8'))
    

    def __bearer_auth_processing(self, auth_key):
        _, payload, _ = auth_key.split('.')
        payload = json.loads(base64.b64decode(payload).decode('ascii'))
        user_id = None
        try:
            user_id = payload['user_id']
            jwt_token = self.server.get_jwt_token(user_id).decode('ascii')
            if auth_key == jwt_token:
                self.send_response(200, 'Ok')
                self.send_header('Access-Control-Allow-Origin', '*')
                # self.end_headers()
                SimpleHTTPRequestHandler.do_GET(self)
                return
        except Exception:
            self.do_BEARER_AUTH_HEAD()
            response = { 'error': "No Authentication Header Received" }
            self.wfile.write(bytes(json.dumps(response), 'utf-8'))



    def do_GET(self):
        fetch_mode = self.headers.get('Sec-Fetch-Mode')
        if self.headers.get('Authorization') is None:
            if fetch_mode == 'cors':
                self.do_BEARER_AUTH_HEAD()
            else:
                self.do_BASIC_AUTH_HEAD()
        else:
            authorization_str = self.headers.get('Authorization')
            first_part_auth, second_part_auth = authorization_str.split()
            if first_part_auth == 'Bearer':
                # Bearer OAuth 2.0 Authentication processing
                self.__bearer_auth_processing(second_part_auth)
            elif first_part_auth == 'Basic':
                self.__basic_auth_processing(second_part_auth)
            else:
                self.do_BASIC_AUTH_HEAD()
                self.wfile.write(bytes('No Authentication Header Received', 'utf-8'))
    

    def do_OPTIONS(self):
        self.send_response(200, 'Ok')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'X-Requested-With')
        self.send_header('Access-Control-Allow-Headers', 'Authorization')
        self.send_header("Access-Control-Allow-Credentials", "true")
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()