from rest_framework import status
from rest_framework.test import APITestCase

class TeamTestCase(APITestCase):
    def add_member(self):
        data = {"firstname": "test", "lastname": "case", "email": "test@localhost.com",
                "phone": "2222222222", "isadmin": False}
        response = self.client.post("/api/members/", data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
