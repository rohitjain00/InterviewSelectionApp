import uuid
import datetime

from app.main import db
from app.main.model.interview import Interview
from app.main.services.student_service import get_students_from_array

def add_new_interview(data):
  if not verify_data(data):
    response_object = {
      'status': 'fail',
      'message': 'Something went Wrong.'
    }
    return response_object, 401
  students = get_students_from_array(data['students'])
  if len(students) < 2:
    response_object = {
      'status': 'fail',
      'message': 'Less than 2 participants.'
    }
    return response_object, 401
  if not students:
    response_object = {
      'status': 'fail',
      'message': 'Something went Wrong.'
    }
    return response_object, 401
  new_interview = Interview(name=data['name'], start_time=get_date(data['start_time']), end_time=get_date(data['end_time']), students=students)
  save_changes(new_interview)
  response_object = {
      'status': 'success',
      'message': 'Successfully Created.'
  }
  return response_object, 201

def get_all_interviews():
  return Interview.query.filter(Interview.start_time >= datetime.datetime.now()).order_by(Interview.start_time).all()

def update_interview(data):
  if not verify_data(data):
    return throw_error("Something went wrong"), 401
  students = get_students_from_array(data['students'])
  if not students:
    return throw_error("Less than 2 participants"), 401
  interview = Interview.query.filter_by(id=data['id']).first()
  interview.name = data['name']
  interview.start_time = data['start_time']
  interview.end_time = data['end_time']
  interview.students = students
  save_changes(interview)

  return {
    "status": "pass",
    "message": "Interview Updated Successfully"
  }

def verify_data(data):
  return True;

def convert_interview(interview):
  return {
      id: interview.id,
      name: interview.name,
      start_time: interview.start_time,
      end_time: interview.end_time,
      students: [s.id for s in interview.students]
    }

def get_date(date):
  return datetime.datetime.strptime(date, "%Y-%m-%dT%H:%M")
def save_changes(data):
    db.session.add(data)
    db.session.commit()

def throw_error(err_msg):
  return{
      'status': 'fail',
      'message': err_msg
    }