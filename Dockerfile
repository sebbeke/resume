FROM node:15-alpine AS BUILD_IMAGE
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
# copy from build image
COPY --from=BUILD_IMAGE /usr/src/app/dist .
EXPOSE 80

