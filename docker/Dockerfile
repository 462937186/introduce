FROM node:14.17.1-alpine as builder
ENV NODE_VERSION=v14.17.1 NPM_VERSION=6
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
ARG ENV_CONFIG=dev
ENV ENV_CONFIG=$ENV_CONFIG

WORKDIR /app

COPY ../dist /app

FROM nginx:alpine
COPY --from=builder /app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8202
CMD ["nginx", "-g", "daemon off;"]
