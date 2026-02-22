from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'techs', views.TechViewSet, basename='tech')
router.register(r'projects', views.ProjectsViewSet, basename='project')
router.register(r'courses', views.CourseViewSet, basename='course')
router.register(r'contacts', views.ContactViewSet, basename='contact')

urlpatterns = [
    path('', include(router.urls)),
]