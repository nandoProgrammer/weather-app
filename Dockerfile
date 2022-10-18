FROM node:16 as NODE
WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build --prod

FROM nginx:1.21
COPY --from=node /app/dist/teste /usr/share/nginx/html

EXPOSE 80