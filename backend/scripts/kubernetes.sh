#!/bin/bash

set -e

#kubernetes front-end deployment
echo "☸️ Deploying backend to Kubernetes..."
kubectl apply -f backend.yaml

#kubernetes back-end deployment
echo "☸️ Deploying frontend to Kubernetes..."
kubectl apply -f frontend.yaml

echo "Kubernetes deployment completed"