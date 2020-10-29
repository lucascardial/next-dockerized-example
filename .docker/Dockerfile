FROM node:14-alpine
# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /var/www
# Installing dependencies
COPY ./package.json ./

RUN npm install
