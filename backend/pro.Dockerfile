FROM node:18-alpine AS build

ARG DBPASSWORD
ARG DBUSER
ARG HOST
ENV DBPASSWORD=$DBPASSWORD
ENV DBUSER=$DBUSER
ENV HOST=$HOST

WORKDIR /usr/app

COPY ./package.json .

RUN npm install .

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm i --only=production

COPY --from=build /usr/app/dist ./dist

EXPOSE 8080

CMD ["npm", "run", "start"]