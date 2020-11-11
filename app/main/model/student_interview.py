from .. import db

student_interview= db.Table('student_interview'
  db.Column('student_id', db.Integer, db.ForeignKey('student.id'), primary_key=True)
  db.Column('interview_id', db.Integer, db.ForeignKey('interview.id', primary_key=True))
)