FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Expose dev port
EXPOSE 4000

# Run in development mode
CMD ["npm", "run", "dev"]
