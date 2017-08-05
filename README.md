# SimpleBrowserMMOGame

## To install:
instal npm `sudo apt-get install npm` (on debian based linux).
got to frontend/app `cd frontend/app`
instal npm packages localy in `./node_modules` `npm install`
type: `docker-compose build` 

## To run:
type `docker-compose up`

## Configuration:
Default hosting port is 8080 you can change it in docker-compose.yml nginx image configuguration.
On default configs site is hosted on 0.0.0.0 (publicly accessible), if you want to host site only localy change it in docker-compose.yml nginx image ports configuration starting ports with 127.0.0.1: for example:
`127.0.0.1:8080:80` . 
