from flask import request
from flask_restplus import Resource

from ..util.dto import StudentDto
from ..services.student_service import add_new_student, get_all_students

api = StudentDto.api
_student = StudentDto.student


@api.route('/')
class StudnetList(Resource):
    @api.doc('list_of_registered_student')
    @api.marshal_list_with(_student, envelope='data')
    def get(self):
        """List all registered users"""
        return get_all_students()

    @api.response(201, 'Student successfully created.')
    @api.doc('create a new student')
    @api.expect(_student, validate=True)
    def post(self):
        """Creates a new User """
        data = request.json
        return add_new_student(data=data)

