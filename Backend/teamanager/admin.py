from django.contrib import admin
from .models import Team

class TeamAdmin(admin.ModelAdmin):
    list_display=("firstname", "lastname", "email", "phone", "isadmin")


# Register model
admin.site.register(Team, TeamAdmin)
