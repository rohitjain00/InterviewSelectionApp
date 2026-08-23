import os
import smtplib
from app.main import get_smtp


def send_email(interview, email):
  smtp_user = os.getenv('SMTP_USER')
  if smtp_user is None:
    raise RuntimeError('SMTP_USER environment variable is required')
  # message to be sent
  message = interview.name + ' ' + str(interview.id) + ' ' + interview.start_time.strftime("%m/%d/%Y, %H:%M:%S") + ' ' + interview.end_time.strftime("%m/%d/%Y, %H:%M:%S") + ' '
  for s in interview.students:
    print(s.name)
    message = message + s.name
  # sending the mail
  print(message)
  smtp = get_smtp()
  smtp.sendmail(smtp_user, email, str(18))
  print('email sent')
