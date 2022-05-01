from http.server import ThreadingHTTPServer
from AuthHTTPRequestHandler import AuthHTTPRequestHandler
import redis


class PrivateImageHTTPServer(ThreadingHTTPServer):


    def __init__(self, address, _handler_class = AuthHTTPRequestHandler):
        super().__init__(address, _handler_class)
        
        # Set up REDIS connection parameters
        REDIS_HOST = 'localhost'
        REDIS_PORT = 6379
        self.r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT)
    

    def get_jwt_token(self, user_id):
        jwt_token = self.r.get(f"user_id:{user_id}")
        return jwt_token