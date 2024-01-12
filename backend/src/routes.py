from flask import Flask
from flask_restful import Resource, reqparse
from flask_sqlalchemy import SQLAlchemy
from pandasCalc import json_data


class Data(Resource):
    def get(self):
        return json_data
    