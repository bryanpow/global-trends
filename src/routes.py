from flask import Flask
from flask_restful import Resource, reqparse
from flask_sqlalchemy import SQLAlchemy
import pandasCalc



class Data(Resource):
    def get(self):
        return pandasCalc.json_data