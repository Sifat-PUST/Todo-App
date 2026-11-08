from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):

    def validate_task(self,value):
        value= value.strip()
        if value == "":
            raise serializers.ValidationError('Task can not be empty')
        
        if len(value) < 3:
            raise serializers.ValidationError('Task should be contain at least 3 characters')
        
        return value
    
    class Meta:
        model= Todo
        fields= ['id','task','done']