FROM node:16-alpine as node

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install --force

COPY . /app

RUN npm run build

FROM nginx:stable-alpine

COPY --from=node /app/dist/atos-app /usr/share/nginx/html

EXPOSE 80