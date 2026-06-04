#!/bin/bash

set -e  # stop script if any command fails

echo "Starting project setup..."

# Install all dependencies at once
npm install express bcryptjs jsonwebtoken dotenv zod

# Install dev dependencies
npm install -D nodemon typescript @types/node @types/express

# Initialize TypeScript
npx tsc --init

# Install Prisma
npm install prisma
npm install @prisma/client

# Initialize Prisma setup
npx prisma init



#github
git install
git add .
git commit -m "auto commit"
git push origin main

echo "Setup completed successfully!"
