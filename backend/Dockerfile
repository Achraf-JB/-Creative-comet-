FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

# Install all dependencies including devDependencies
RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
