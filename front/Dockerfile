FROM node:16-alpine3.14 AS builder
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . . 
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/FaceDog /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'