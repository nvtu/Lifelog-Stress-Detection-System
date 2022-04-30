from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
@csrf_exempt
def cross_server_auth(request):
    if request.method == 'POST':
        data = request.POST
        username = data['username']
        password = data['password']
        user = authenticate(username = username, password = password)
        
        if user is not None: 
            return HttpResponse(status = 200)
        else: return HttpResponse(status = 403)
    else: return HttpResponse(status = 405)