from django.urls import path
from .views import PostsListAPIView

urlpatterns = [
    path("posts/", PostsListAPIView.as_view())
]