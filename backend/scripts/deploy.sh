#!/bin/bash
set -e

APP_NAME="hotel-management-system"

echo "Stopping old container..."
docker stop $APP_NAME || true
docker rm $APP_NAME || true

echo "Starting new container..."
docker run -d \
  --name $APP_NAME \
  -p 3000:3000 \
  --env-file .env \
  $APP_NAME:latest