 # syntax=docker/dockerfile:1
 FROM node:12-alpine
 RUN apk add --no-cache python g++ make
 WORKDIR /views
 COPY . .
 RUN yarn install --production
 CMD ["node", "app.js"]