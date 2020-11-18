from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import smtplib

from .config import config_by_name

def get_email_smtp():
    s = smtplib.SMTP('smtp.gmail.com', 587)
    # start TLS for security
    s.starttls()

    # Authentication
    s.login("imsleepx@gmail.com", "password")

    return s

db = SQLAlchemy()
smtp = get_email_smtp()

def create_app(config_name):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config_by_name[config_name])
    db.init_app(app)

    return app