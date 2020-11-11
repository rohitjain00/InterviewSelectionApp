from flask_restplus import Namespace, fields


class StudentDto:
    api = Namespace('student', description='student related operations')
    student = api.model('student', {
        'id': fields.Integer(required=False, description='user\'s id'),
        'name': fields.String(required=True, description='user\'s name')
    })

class InterviewDto:
    api = Namespace('interview', description='interview related operations')
    common_fields = {
        'id': fields.Integer(required=False, description='interview\'s id'),
        'name': fields.String(required=True, description='interview\'s name'),
        'start_time': fields.DateTime(required=True, description='interview\'s start time'),
        'end_time': fields.DateTime(required=True, description='interview\'s end time'),
    }
    interview_u = api.model('interview_u', dict(common_fields , **{
        'students': fields.List(fields.Integer(required=True, description='student for interviews'))
    }))
    interview_o = api.model('interview_o', dict(common_fields , **{
        'students': fields.List(fields.Nested(StudentDto.student))
    }))

class StudentInterviewDto:
    api = Namespace('interview', description='interview related operations')
    student_interview = api.model('student_interview', {
        'student_id': fields.Integer(required=True, description='student\'s id'),
        'interview_id': fields.Integer(required=True, description='interview\'s id'),
    })
