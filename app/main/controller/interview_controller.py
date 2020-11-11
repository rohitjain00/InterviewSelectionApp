from flask import request
from flask_restplus import Resource

from ..util.dto import InterviewDto
from ..services.interview_service import add_new_interview, get_all_interviews, update_interview

api = InterviewDto.api
_interview_u = InterviewDto.interview_u
_interview_o = InterviewDto.interview_o

@api.route('/')
class InterviewList(Resource):
    @api.doc('list_of_all_upcoming_interviews')
    @api.marshal_list_with(_interview_o, envelope='data')
    def get(self):
        """List all registered Interview"""
        return get_all_interviews()

    @api.response(201, 'Interview successfully created.')
    @api.doc('create a new Interview')
    @api.expect(_interview_u, validate=True)
    def post(self):
        """Creates a new Interview """
        data = request.json
        return add_new_interview(data=data)

    @api.response(201, 'Interview successfully updated.')
    @api.doc('update an Interview')
    @api.expect(_interview_u, validate=True)
    def put(self):
      data = request.json
      return update_interview(data=data)
