FROM node:18-alpine


ARG DBPASSWORD
ARG DBUSER
ENV DBPASSWORD=$DBPASSWORD
ENV DBUSER=$DBUSER

WORKDIR /usr/app/backend

COPY ./package.json .

RUN npm install .

COPY . .

CMD ["npm","run","dev"]