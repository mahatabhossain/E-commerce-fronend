FROM node:16 as builder

RUN mkdir -p /app
WORKDIR /app  
COPY package*.json ./
COPY . /app/
RUN npm i && npm run build

FROM nginx:1.15.8-alpine
COPY --from=builder /app/dist/web-tier/ /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

