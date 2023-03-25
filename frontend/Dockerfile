FROM node:18-alpine

WORKDIR /usr/app/frontend

COPY package.json .

RUN npm install yarn

RUN yarn

COPY . .

CMD ["yarn","run","dev"]