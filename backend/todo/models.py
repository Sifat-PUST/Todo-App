from django.db import models

# Create your models here.
class Todo(models.Model):
    task=models.CharField(max_length=300)
    done=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)

    