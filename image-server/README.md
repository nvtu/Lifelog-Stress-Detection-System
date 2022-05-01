# Lifelog-Annotation-Image-Server

A private HTTP Authentication Image Server developed purely from http.server library. The image server supports Basic Authentication and Bearer OAuth 2.0 Authentication to authenticate user's previlege to access image content through a third-party server.  

**Requirements**
```
  Python >= 3.7
  Redis Server
  Third-party Server for User-Authentication (Ex: Django Server with JWT-Authentication)
```

**Install python dependencies**

``
$ pip install -r requirements.txt
``

To run the image server in local host:
```
$ python main_image_server.py 127.0.0.1 <port> <path-to-image-directory>
```

To run the image server publicly:
```
$ python main_image_server.py 0.0.0.0 <port> <path-to-image-directory>
```
