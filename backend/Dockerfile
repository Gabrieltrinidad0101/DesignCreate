FROM node:18-alpine

WORKDIR /usr/app/backend

COPY ./package.json .

COPY ../share .

RUN npm install .

COPY . .

CMD ["npm","run","dev"]





