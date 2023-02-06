from django.urls import path
from .views import PostsListAPIView, ImagesListAPIView, SinglePostAPIView

urlpatterns = [
    path("posts/", PostsListAPIView.as_view()),
    path("images/", ImagesListAPIView.as_view()),
    path("post/<int:post_id>/", SinglePostAPIView.as_view())
]