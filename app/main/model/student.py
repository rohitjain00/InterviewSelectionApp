from .. import db
from .student_interview import student_interview

class Student(db.Model):

  __tablename__="student"

  id=db.Column(db.Integer, primary_key=True, autoincrement=True)
  name=db.Column(db.String(50), nullable=False)
  interviews=db.relationship('Interview', secondary=student_interview, lazy='subquery', back_populates='students')