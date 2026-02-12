from django.db import models

# Create your models here.
class Tech(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='tech_icons/', blank=True, null=True)
    
    def __str__(self):
        return self.name


class Projects(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    skills = models.ForeignKey(Tech, on_delete=models.CASCADE, related_name='projects')
    image = models.ImageField(upload_to='project_images/', blank=True, null=True)
    
    def __str__(self):
        return self.title


class Course(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='course_images/', blank=True, null=True)
    
    def __str__(self):
        return self.title


class Contact(models.Model):
    title = models.CharField(max_length=100)
    link = models.URLField(max_length=200)
    icon = models.ImageField(upload_to='contact_icons/', blank=True, null=True)
    
    def __str__(self):
        return self.title