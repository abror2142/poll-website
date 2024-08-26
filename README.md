# Poll Website
## BUILD AND RUN
### 1) Configuring Environmental variables:
  Repository inlcudes **.env.developer** file which contains secret key tags and sample values.
  * **RENAME** .env.developer file to .env
  * **CHANGE** the content inside your new .env file values youdecided to use.
    
    !!! Do not forget to include **google app password** and **gmail account**.
    If you don't know how to create on please check out this [tutorial](https://www.hostpapa.com/knowledgebase/how-to-create-and-use-google-app-passwords/).
### 2) Build the app using Docker Compose
  This App is dockerized which means you can run it instantly with minimal configuration on your local machine.
  -  Go to the root folder of the project(you should see compose.yaml file)
  -  Make sure you have followed 1st step (configure .env file).
  -  run `docker compose up` on terminal. 
  
## APP
### Structure
  - **Django** backend
  - **React** frontend
  - **PostgreSQL** DB
  - All of them **Docker**ized
