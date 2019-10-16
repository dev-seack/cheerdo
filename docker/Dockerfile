FROM node:10.15.0-alpine as builder

RUN mkdir /app
ADD . /app

WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx:1.17-alpine
COPY --from=builder /app/build /usr/share/nginx/html
