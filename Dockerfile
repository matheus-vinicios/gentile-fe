#
# BUILD
#
FROM node:18.13.0-alpine3.16 as build

ARG environment

WORKDIR /usr/src/app
COPY . .
RUN npm ci && npm run build-${environment}

#
# PUBLISH
#
FROM nginx:1.23.3-alpine

ARG output_directory

COPY --from=build ${output_directory} /usr/share/nginx/html