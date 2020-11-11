from .. import db

class Student(db.Model):

  __tablename__="student"

  id=db.Column(db.Integer, primary_key=True, autoincrement=True)
  name=db.Column(db.String(50), nullable=False)
