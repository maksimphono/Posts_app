from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import *
from .serializers import *
# Create your views here.

class PostsListAPIView(APIView):
    def get(self, request, *args, **kwargs):
        posts = PostModel.objects.all()
        serializer = PostsSerializer(posts, many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)