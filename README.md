# SimpleBrowserMMOGame

## Build status:
Site state:[![Build Status](http://195.181.223.71:8080/buildStatus/icon?job=Run-site)](http://195.181.223.71:8080/job/Run-site/)  
CI most recent build(for dev && master): [![Build Status](http://195.181.223.71:8080/buildStatus/icon?job=site-ci)](http://195.181.223.71:8080/job/site-ci/)  
Continuous delivery(and master CI): [![Build Status](http://195.181.223.71:8080/buildStatus/icon?job=site-ci-cd)](http://195.181.223.71:8080/job/site-ci-cd/)  
  
## To install:
instal npm `sudo apt-get install npm` (on debian based linux).  
  
instal docker and docker-compose  `sudo apt-get install docker docker-compose` (on ubuntu based linux, if you have diffrent distribution you may want to look for packages source at https://docs.docker.com/compose/ and https://docs.docker.caom/engine/installation/).  
  
got to frontend/app `cd frontend/app`  
  
instal npm packages localy in ./node_modules `npm install` 
  
type: `docker-compose build`   
  

## To run:
type `docker-compose up`

  
## Configuration:
Default hosting port is 80 you can change it in docker-compose.yml nginx image configuguration.  
On default configs site is hosted on 0.0.0.0 (publicly accessible), if you want to host site only localy change it in docker-compose.yml nginx image ports configuration starting ports with localhost: for example: `localhost:80:80` . 

## Runing tests
Supported testing for now:  

  backend:  
    with pep8  
      `cd backend/app  
      pep8 .`  

  frontend:  
    with eslint  
      `cd frontend/app/  
       npm install .  
       cd frontend/app/src/  
       ../node_modules/.bin/eslint $(find -name "*.jsx")`  
