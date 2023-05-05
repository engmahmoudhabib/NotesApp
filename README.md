# This is a basic NestJs file for creating , getting Notes from MOngoDB and authentication users 
# by logging them and getting cookies using JWT

# How it works

    we have 3 microservices 
    1- notes
    2- updating
    3- auth

   -    updating is the just a sample if we want to add another microservice and make it communicate with notes
        so basically it' just logging some stuff when creating new note.
        notes is responsible of creating and getting data ( post , get )
        if we want to implement update (patch) or delete (delete) we can do it in any place ( notes , updating )
        all of them communicates  with auth microservices using RabbitMQ 

# note 
    DB implemented using Docker

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start:dev notes
# no need to run these two commands just dev notes command
$ npm run start:dev updating
$ npm run start:dev auth

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Init DB
$   install Docker first

## Create DB ON Docker Container
$ docker-compose up --build -V



    After Docker finishes building volumes we can start the dev server of notes
    Postman Collection is available for testing
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
