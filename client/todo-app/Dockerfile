FROM node:latest AS build
WORKDIR /client
COPY  package*.json ./
RUN npm i

ARG NG_APP_API_URL


COPY . .

ENV API_URL=${NG_APP_API_URL}

RUN npm run build

FROM nginx:stable
COPY --from=build /client/dist/todo-app /usr/share/nginx/html


EXPOSE 80 


