FROM node:18-alpine

WORKDIR /usr/app/backend

COPY ./package.json .

RUN npm install .

COPY . .

RUN npm run build

CMD ["npm","run","start"]