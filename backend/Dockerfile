FROM node:18-alpine


ARG DBPASSWORD
ARG DBUSER
ARG HOST
ENV DBPASSWORD=$DBPASSWORD
ENV DBUSER=$DBUSER
ENV HOST=$HOST

WORKDIR /usr/app/backend

COPY ./package.json .

RUN npm install .

COPY . .

CMD ["npm","run","dev"]