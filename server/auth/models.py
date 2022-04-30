from django.db import models
from rest_framework_simplejwt.serializers import TokenObtainSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from server.settings import REDIS_HOST, REDIS_PORT
import redis
import base64
import json


# Create your models here.
class CustomTokenObtainPairSerializer(TokenObtainSerializer):

    @classmethod
    def get_token(cls, user):
        refresh = RefreshToken.for_user(user) 
        return refresh
    

    def validate(self, attrs):
        """
        Get new access token and update redis db
        """
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        self.update_redis_db(data)
        return data

    
    def update_redis_db(self, token_data):
        """
        Update access token in redis db for the current user
        """
        # Establish connection to redis db
        r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT)
        
        # Get access token
        access_token = token_data['access']

        # Get the payload of the access token and decode the payload
        _, payload, _ = access_token.split('.')
        payload = json.loads(base64.b64decode(payload).decode('ascii'))

        # Get the user_id from the payload
        user_id = payload['user_id']

        # Update the redis db with the new access token
        r.set(f"user_id:{user_id}", access_token) 


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer