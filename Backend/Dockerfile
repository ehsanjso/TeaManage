# base image  
FROM python:3  

# set environment variables  
ENV PYTHONUNBUFFERED 1  
COPY . /api
WORKDIR /api  
# install dependencies  
# COPY /api/requirements.txt requirements.txt
RUN pip install -r requirements.txt  
# port where the Django app runs  
# start server  
RUN chmod a+rwx run_web.sh && chmod -R a+rwx /api
