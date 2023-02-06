from django.urls import path
from .views import PostsListAPIView, ImagesListAPIView

urlpatterns = [
    path("posts/", PostsListAPIView.as_view()),
    path("images/", ImagesListAPIView.as_view())
]