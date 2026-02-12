from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TechViewSet, CourseViewSet, ContactViewSet, ProjectsViewSet 

router = DefaultRouter()
router.register(r'tech', TechViewSet)
router.register(r'projects', ProjectsViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'contacts', ContactViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]