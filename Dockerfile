 # syntax=docker/dockerfile:1
 FROM node:12-alpine
 RUN apk add --no-cache python g++ make
 RUN yarn install --production
 RUN npm i mongodb
 RUN mkdir -p /usr/src/app
 WORKDIR /usr/src/app
 COPY package.json /usr/src/app/
 RUN npm install
 COPY . /usr/src/app
 EXPOSE 3000
 CMD ["node", "app.js"]
