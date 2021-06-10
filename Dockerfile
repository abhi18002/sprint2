 # syntax=docker/dockerfile:1
 FROM node:12-alpine
 RUN apk add --no-cache python g++ make
 WORKDIR /
 COPY . .
 RUN yarn install --production
 RUN npm i nodemon
 RUN npm i mongodb
 CMD ["nodemon", "app.js"]
