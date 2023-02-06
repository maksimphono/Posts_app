from rest_framework import serializers
from .models import *

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostModel
        fields = ["id", "user", "content"]

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageModel
        fields = ["id", "name", "image", "post"]