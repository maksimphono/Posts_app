from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class PostModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null = True)
    content = models.TextField()

    def __str__(self):
        return self.content[:9]

class ImageModel(models.Model):
    name = models.CharField(max_length=19, blank=True, null = True)
    image = models.ImageField(upload_to = "pictures/", blank=True, null = True)
    post = models.ForeignKey(PostModel, on_delete=models.CASCADE, blank=True, null = True)

    def __str__(self):
        return self.name
