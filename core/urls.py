from django.urls import path
from . import views

urlpatterns = [
    path('dinein/', views.dinein, name='dinein')
]
