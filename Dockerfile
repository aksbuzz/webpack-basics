FROM node:lts-alpine AS development

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm ci

COPY . /app

ENV CI=true
ENV PORT=8080

CMD [ "npm", "start" ]



FROM development AS build

RUN npm run build



FROM nginx:alpine

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# remove default nginx static assets
RUN rm -rf ./*

COPY --from=build /app/dist .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]