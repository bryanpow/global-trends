from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
import sys
import routes
sys.path.append(os.path.dirname(__file__))
app = Flask(__name__)
CORS(app)
api = Api(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = """postgresql://postgres:Bwiizard1@localhost:5432/Test1"""
# db = SQLAlchemy(app)

api.add_resource(routes.Data, '/')

if __name__ == '__main__' :
    app.run(debug = False)

