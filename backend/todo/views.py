from django.shortcuts import render
# from rest_framework.response import Response
from .serializers import TodoSerializer
from .models import Todo
from rest_framework.viewsets import ModelViewSet




# Create your views here.
class TodoModelViewSet(ModelViewSet):
    queryset= Todo.objects.all()
    serializer_class=TodoSerializer