#!/bin/bash

set -e

#building docker file
echo "🐳 Building Docker image..."
docker build -t hotel-app .

#docker container running
echo "🚀 Running container..."
docker run -p 3000:3000 --name hotel-app hotel-app

echo "✅ Docker deployment completed"