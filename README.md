# SimpleBrowserMMOGame

## To install:
instal npm `sudo apt-get install npm` (on debian based linux).  
  
instal docker and docker-compose  `sudo apt-get install docker docker-compose` (on ubuntu based linux, if you have diffrent distribution you may want to look for packages source at https://docs.docker.com/compose/ and https://docs.docker.caom/engine/installation/).  
  
got to frontend/app `cd frontend/app`  
  
instal npm packages localy in ./node_modules `npm install` 
  
type: `docker-compose build`   
  

## To run:
type `docker-compose up`

  
## Configuration:
Default hosting port is 8080 you can change it in docker-compose.yml nginx image configuguration.  
On default configs site is hosted on 0.0.0.0 (publicly accessible), if you want to host site only localy change it in docker-compose.yml nginx image ports configuration starting ports with localhost: for example: `localhost:8080:80` . 
