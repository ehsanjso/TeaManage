from rest_framework import serializers
from .models import Team

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ("id", "firstname", "lastname", "email", "phone", 'isadmin')