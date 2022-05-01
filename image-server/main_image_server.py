from PrivateImageHTTPServer import PrivateImageHTTPServer
import argparse
import os



# Parsing inputs
parser = argparse.ArgumentParser()
parser.add_argument('host', type=str, help='host address')
parser.add_argument('port', type=int, help='port number')
parser.add_argument('dir', type=str, help='directory')
args = parser.parse_args()

PORT = args.port
HOST_ADDRESS = args.host

start_dir = args.dir
if start_dir:
    print("Changing dir to {cd}".format(cd=start_dir))
    os.chdir(start_dir)

server = PrivateImageHTTPServer((HOST_ADDRESS, PORT))
print(f"Serving at {HOST_ADDRESS if HOST_ADDRESS != '' else 'http://localhost'}:{PORT}")
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
server.server_close()

