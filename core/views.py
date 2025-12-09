from django.shortcuts import render
from django.http import HttpResponse


def Startingpage(request):
    return render(request, 'core/Startingpage.html')

def dinein(request):
    return HttpResponse("<h1>Welcome to Don Machos Dine-In!</h1>")