## Interview Creation App

### Entity Relationship
![db_schema diagram](db_schema.drawio.png)

### To Start the project

#### Backend
  create a virtual env and install the requirements
  ```
    pip install -r requirements.txt
    python manage.py run
  ```
  This will start the server at localhost:5000

#### Frontend
  go to the `frontend` directory
  ```
  yarn install
  yarn run
  ```
  This will start the dev server to localhost:3000
## Running with Docker

This project is fully Dockerized! To run the application locally without dealing with system dependencies, simply ensure you have Docker and Docker Compose installed and run:

`ash
docker-compose up --build
`
This will automatically build the containers, install all necessary dependencies, and spin up the environment.
