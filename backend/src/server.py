from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = """postgresql://postgres:Bwiizard1@localhost:5432/Test1"""
db = SQLAlchemy(app)
api = Api(app)


if __name__ == '__main__' :
    app.run(debug = True)

 

