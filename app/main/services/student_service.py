import uuid
import datetime

from app.main import db
from app.main.model.student import Student

def add_new_student(data):
  new_student = Student(name=data['name'], interviews=[])
  save_changes(new_student)
  response_object = {
      'status': 'success',
      'message': 'Successfully Created.'
  }
  return response_object, 201

def get_all_students():
  return Student.query.all()

def get_a_student(public_id):
  pass

def get_students_from_array(data):
  students = []
  for id in data:
    student = Student.query.filter_by(id=id).first()
    if not student:
      return None
    students.append(student)
  return students

def available_student(students, start_time, end_time, exclude=None):
  for student in students:
    for interview in student.interviews:
      if interview.id is exclude:
        continue
      if interview.start_time <= end_time and interview.end_time >= start_time:
        return False
  return True

def save_changes(data):
    db.session.add(data)
    db.session.commit()
