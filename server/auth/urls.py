from django.urls import path
from . import views as local_views


urlpatterns = [
    path('cross-server-auth', local_views.cross_server_auth, name='cross_server_auth'),
]