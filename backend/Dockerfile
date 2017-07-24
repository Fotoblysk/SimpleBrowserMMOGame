FROM python:3.5
ADD requirements.txt /app/
RUN pip3 install -r /app/requirements.txt
ADD run.py /app/
EXPOSE 8080
CMD [ "python3.5", "/app/run.py" ]
