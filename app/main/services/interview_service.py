import uuid
import datetime

from app.main import db
from app.main.model.interview import Interview
from app.main.services.student_service import get_students_from_array, available_student
from app.main.services.email_service import send_email

def add_new_interview(data):
  if not verify_date(data):
    return throw_error("Start time cannot be greater than end time"), 401
  students = get_students_from_array(data['students'])
  if len(students) < 2:
    return throw_error("Less than 2 participants."), 401
  if not students:
    return throw_error("Invalid Student Ids"), 401
  if not available_student(students, get_date(data['start_time']), get_date(data['end_time'])):
    return throw_error("Students are not available"), 401
  new_interview = Interview(name=data['name'], start_time=get_date(data['start_time']), end_time=get_date(data['end_time']), students=students)
  save_changes(new_interview)
  send_email(new_interview, "rohitjain18005@gmail.com")
  response_object = {
      'status': 'success',
      'message': 'Successfully Created.'
  }
  return response_object, 201

def get_all_interviews():
  return Interview.query.filter(Interview.start_time >= datetime.datetime.now()).order_by(Interview.start_time).all()

def update_interview(data):
  if not verify_date(data):
    return throw_error("Start time cannot be greater than end time"), 401
  students = get_students_from_array(data['students'])
  if len(students) < 2:
    return throw_error("Less than 2 participants."), 401
  if not students:
    return throw_error("Invalid Student Ids"), 401
  interview = Interview.query.filter_by(id=data['id']).first()
  if not available_student(students, get_date(data['start_time']), get_date(data['end_time']), exclude=interview.id):
    return throw_error("Students are not available"), 401
  interview.name = data['name']
  interview.start_time = get_date(data['start_time'])
  interview.end_time = get_date(data['end_time'])
  interview.students = students
  save_changes(interview)
  return {
    "status": "pass",
    "message": "Interview Updated Successfully"
  }, 201
def verify_date(data):
  if get_date(data['start_time']) > get_date(data['end_time']):
    return False
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