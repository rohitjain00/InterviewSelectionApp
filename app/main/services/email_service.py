import smtplib
from app.main import smtp


def send_email(interview, email):
  # message to be sent
  message = interview.name + ' ' + str(interview.id) + ' ' + interview.start_time.strftime("%m/%d/%Y, %H:%M:%S") + ' ' + interview.end_time.strftime("%m/%d/%Y, %H:%M:%S") + ' '
  for s in interview.students:
    print(s.name)
    message = message + s.name
  # sending the mail
  print(message)
  smtp.sendmail("imsleepx@gmail.com", email, str(18))
  print('email sent')
