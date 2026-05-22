# Initialize app
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining source code
COPY . .

# Expose backend port
EXPOSE 5000

# Start application
CMD ["npm", "start"]