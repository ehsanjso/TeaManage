from django.db import models

class Team(models.Model):
    firstname=models.CharField(max_length=120)
    lastname=models.CharField(max_length=120)
    email=models.CharField(max_length=120)
    phone=models.CharField(max_length=120)
    isadmin=models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.firstname

