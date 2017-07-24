FROM python:3.5
ADD requirements.txt /
RUN pip3 install -r /requirements.txt
EXPOSE 8080
CMD [ "python3.5", "/app/run.py" ]
