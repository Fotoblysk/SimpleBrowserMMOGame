FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
RUN npm install

#Run dev
#CMD [ "npm", "start"]

# Run production app dependencies
CMD [ "npm", "run", "build" ]
RUN npm install -g serve
CMD [ "serve", "-s", "build" ]

