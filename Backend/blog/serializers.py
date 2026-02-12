from rest_framework import serializers
from .models import Tech,Projects,Contact,Course


class TechSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tech
        fields = '__all__'

    
class ProjectsSerializer(serializers.ModelSerializer):
    skills = TechSerializer(read_only=True)
    skills_name=serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='name'
    )
    class Meta:
        model = Projects
        fields = ['id', 'title', 'content', 'skills', 'skills_name', 'image']

    

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'