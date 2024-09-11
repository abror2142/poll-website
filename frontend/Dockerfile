FROM node:22-alpine3.19

WORKDIR /home/app/frontend

# Environmental variables

ARG GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID

ARG GOOGLE_CALLBACK_URL
ENV GOOGLE_CALLBACK_URL=$GOOGLE_CALLBACK_URL

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000