# base image
FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json ./package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . .

# start app
CMD ng serve --host 0.0.0.0
