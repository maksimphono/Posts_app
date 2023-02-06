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
    
    def post(self, request, *args, **kwargs):
        data = {
            "content" : request.data.get("content"),
            "user" : request.user.id
        }
        serializer = PostsSerializer(data = data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class SinglePostAPIView(APIView):
    def get_object(self, post_id, user_id = 0):
        try:
            return PostModel.objects.get(id = post_id)
        except PostModel.DoesNotExist:
            return None
    
    def get(self, request, post_id):
        post_instance = self.get_object(post_id)
        if post_instance:
            serializer = PostsSerializer(post_instance)
            return Response(serializer.data, status = status.HTTP_200_OK)
        return Response({"response" : "Object not found"}, status = status.HTTP_400_BAD_REQUEST)


class ImagesListAPIView(APIView):
    def get(self, req):
        serializer = ImageSerializer(ImageModel.objects.all(), many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)