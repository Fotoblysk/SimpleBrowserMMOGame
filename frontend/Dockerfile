FROM node:latest

# Create app directory
COPY ./app /app/
WORKDIR /app

# Install app dependencies
RUN npm install . && \
chmod a+x /app/node_modules/.bin/react-scripts &&\
npm run build && \
npm install -g serve

#Run dev
#CMD [ "npm", "start"]

# Run production app dependencies
CMD [ "serve", "-s", "build" ]
