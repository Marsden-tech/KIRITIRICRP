from flask_restful import Api, Resource
from flask import request
from app.models import Drug, Patient, ServedPatient, db

api = Api()

class UserResource(Resource):
    def get(self):
        pass

    def post(self):
        
        return {"message": "User added successfully"}, 201

api.add_resource(UserResource, '/users')
