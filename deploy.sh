#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Starting Portfolio Deployment..."

# Build Docker image
echo "📦 Building Docker image..."
docker build -t sundhar-portfolio:latest .

# Tag for registry (replace with your registry)
echo "🏷️ Tagging image..."
docker tag sundhar-portfolio:latest your-registry/sundhar-portfolio:latest

# Push to registry (uncomment when ready)
# echo "⬆️ Pushing to registry..."
# docker push your-registry/sundhar-portfolio:latest

# Run locally for testing
echo "🧪 Starting local container for testing..."
docker run -d -p 3000:80 --name portfolio-test sundhar-portfolio:latest

echo "✅ Deployment complete!"
echo "🌐 Portfolio available at: http://localhost:3000"
echo "🛑 To stop: docker stop portfolio-test && docker rm portfolio-test"