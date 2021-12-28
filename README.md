# TeaManage

## Run locally

### Backend

Project needs python v3 and pip should be installed.
To setup the backend and run it. in /Backend run the commands as follows:

```bash
# Setup
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate


# Start the backend
python manage.py runserver
```

### Frontend

In the /Frontend directory:

```bash
# If you use yarn
yarn
yarn start
```

```bash
# If you use npm
npm i
npm run start
```

## Deploy the application on your sever

Make sure you have Docker and Docker Compose installed on your server.

The application is dockerized, so you only need to run docker-compose command in order to deploy it on your server. You can follow https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04 for more information.

Simply run:
`docker-compose up -d`
