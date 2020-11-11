from .. import db
from .student_interview import student_interview


class Interview(db.Model):

  __tablename__="interview"

  id=db.Column(db.Integer, primary_key=True, autoincrement=True)
  name=db.Column(db.String(50), nullable=False)
  start_time=db.Column(db.DateTime, nullable=False)
  end_time=db.Column(db.DateTime, nullable=False)
  students=db.relationship('Student', secondary=student_interview, lazy='subquery', back_populates='interviews')
