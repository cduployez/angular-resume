### Build stage
FROM node:18.16.1 as build-stage

# Define working directory
WORKDIR /app

# Install dependencies
COPY package*.json /app/
RUN npm install -s

# Copy dependencies
COPY ./ /app/

# Build application
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

# Copy custom entrypoint
COPY ./custom-entrypoint.sh /app/

### Run stage
FROM nginx:1.15

# Copy build output
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

# Copy custom entrypoint with executable permissions
COPY --from=build-stage /app/custom-entrypoint.sh /custom-entrypoint.sh
RUN chmod +x /custom-entrypoint.sh

# Set the BASE_HREF environment variable
ENV BASE_HREF /angular-resume

# Copy default nginx configuration
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

# Override entrypoint based on:
# - https://github.com/nginxinc/docker-nginx/blob/master/Dockerfile-alpine-slim.template
# - https://stackoverflow.com/questions/40608055/running-a-bash-script-before-startup-in-an-nginx-docker-container
ENTRYPOINT ["./custom-entrypoint.sh"]
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
