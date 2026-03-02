from django.urls import path
from .views import getTasks, createTask, updateTask, deleteTask

urlpatterns = [
    path('getTasks/', getTasks, name='getTasks'),
    path('createTask/', createTask, name='createTask'),
    path('updateTask/<int:pk>/', updateTask, name='updateTask'),
    path('deleteTask/<int:pk>/', deleteTask, name='deleteTask')
]
