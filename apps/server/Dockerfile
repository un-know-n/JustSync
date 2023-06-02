FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy packages files to the working directory
COPY . .

# Delete unnecessary files
RUN rm -rf apps/client apps/client-e2e

# Install needed dependencies
RUN npm install

# Start the Nest.js application in production mode
CMD ["npm", "run", "backend:production"]
