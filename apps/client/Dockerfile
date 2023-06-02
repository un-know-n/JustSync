FROM node:18-alpine AS build

# Set working directory in container
WORKDIR /app

# Copy packages files to the working directory
COPY . .

# Delete unnecessary files
RUN rm -rf apps/server apps/server-e2e

# Install needed dependencies
RUN npm install --global @angular/cli@latest
RUN npm install

# Generate production version of application
RUN npx nx build client

# Use official nginx image as the base image
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=build app/dist/apps/client /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
