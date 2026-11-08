from django.urls import path
from .views import TodoModelViewSet
from rest_framework.routers import DefaultRouter

router= DefaultRouter()
router.register("todo", TodoModelViewSet, basename="todo")

urlpatterns= router.urls