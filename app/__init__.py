# app/__init__.py

from flask_restplus import Api
from flask import Blueprint

from .main.controller.student_controller import api as student_ns
from .main.controller.interview_controller import api as interview_ns

blueprint = Blueprint('api', __name__)

api = Api(blueprint,
          title='Interview Schedule Application',
          version='1.0',
          description='a sample app for Interview Schedule'
          )

api.add_namespace(student_ns, path='/student')
api.add_namespace(interview_ns, path='/interview')