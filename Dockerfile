FROM node:18.18.0

# Create app directory

WORKDIR /usr/src/static

# Install app dependencies

COPY package*.json ./

RUN npm install

# Bundle app source

COPY . .

EXPOSE 5001

CMD [ "npm", "start" ]
