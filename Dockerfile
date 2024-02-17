# Use a Node.js base image
FROM node:16-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Use a smaller base image for the production environment
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built React app from the previous stage
COPY --from=build /app/build ./build

# Expose port 3000
EXPOSE 3000

# Command to run the React app
CMD ["node", "./build/server.js"]
