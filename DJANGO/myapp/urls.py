from django.urls import path 
from myapp import views

urlpatterns = [
    path('tutorials',views.tutorials),
    path('tutorials/<int:pk>',views.tutorial_details),
    path('tutorials/published',views.tutorial_published),
    path('meeting', views.meeting)
]
