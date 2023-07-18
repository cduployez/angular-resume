FROM node:18.16.1 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx:1.15
# Copy build output
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# Set the BASE_HREF environment variable
ENV BASE_HREF /angular-resume/
# Replace base href in index.html using the environment variable
RUN sed -i "s|<base href=\"/\">|<base href=\"$BASE_HREF\">|g" /usr/share/nginx/html/index.html
# Copy default nginx configuration
# COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
