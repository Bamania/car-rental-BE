# Simple Dockerfile for development
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Copy prisma folder (this was the main issue!)
COPY prisma ./prisma/

# Copy all source code
COPY . .

# Install ALL dependencies (including dev dependencies for TypeScript)
RUN npm install

# Generate Prisma client
RUN npx prisma generate

# Expose port
EXPOSE 3000

# Start the app (tsx runs TypeScript directly, no build needed)
CMD ["npm", "run", "dev"]
