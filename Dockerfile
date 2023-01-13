#
# BUILD
#
FROM node:18.13.0-alpine3.16 as build

WORKDIR /usr/src/app
COPY . .
RUN npm ci && npm run build-prd

#
# PUBLISH
#
FROM nginx:1.23.3-alpine

COPY --from=build /usr/src/app/dist/gentile-fe /usr/share/nginx/html