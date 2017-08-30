FROM node:latest

# Create app directory
COPY ./app /app/
WORKDIR /app


##Run dev
#RUN npm install .
#CMD [ "npm", "start"]

# Run production app dependencies
# Install app dependencies
RUN npm install . && \
chmod a+x /app/node_modules/.bin/react-scripts &&\
npm run build && \
npm install -g serve
# Run
CMD [ "serve", "-s", "build" ]
