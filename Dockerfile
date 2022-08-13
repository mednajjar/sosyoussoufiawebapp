FROM node:16.16-alpine

WORKDIR /app

# Ports of Expo Server
EXPOSE 3000
EXPOSE 3001
EXPOSE 3002

COPY package.json .
RUN yarn install

COPY . .

CMD ["npm","start"]