import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import smtplib

from .config import config_by_name

def get_email_smtp():
    smtp_user = os.getenv('SMTP_USER')
    smtp_password = os.getenv('SMTP_PASSWORD')
    if smtp_user is None or smtp_password is None:
        raise RuntimeError('SMTP_USER and SMTP_PASSWORD environment variables are required')

    s = smtplib.SMTP('smtp.gmail.com', 587)
    # start TLS for security
    s.starttls()

    # Authentication
    s.login(smtp_user, smtp_password)

    return s

_smtp = None

def get_smtp():
    global _smtp
    if _smtp is None:
        _smtp = get_email_smtp()
    return _smtp

db = SQLAlchemy()

def create_app(config_name):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config_by_name[config_name])
    db.init_app(app)

    return app
