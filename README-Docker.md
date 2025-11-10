# Docker Deployment Guide

## 🐳 Docker Setup

This portfolio application is containerized using Docker for seamless cloud deployment.

### Prerequisites
- Docker installed on your system
- Docker Compose (optional, for easier management)

### Quick Start

#### Option 1: Using Docker Compose (Recommended)
```bash
# Build and run
docker-compose up --build

# Run in background
docker-compose up -d --build

# Stop
docker-compose down
```

#### Option 2: Using Docker Commands
```bash
# Build the image
docker build -t sundhar-portfolio .

# Run the container
docker run -d -p 3000:80 --name portfolio sundhar-portfolio

# Stop the container
docker stop portfolio && docker rm portfolio
```

#### Option 3: Using Deployment Script
```bash
# Make script executable (Linux/Mac)
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### 🌐 Access Your Portfolio
- Local: http://localhost:3000
- Production: Replace with your domain

### 📦 Image Details
- **Base Image**: nginx:alpine (lightweight)
- **Build**: Multi-stage build for optimization
- **Size**: ~50MB (optimized)
- **Port**: 80 (mapped to 3000 locally)

### ☁️ Cloud Deployment Options

#### AWS ECS/Fargate
```bash
# Tag for ECR
docker tag sundhar-portfolio:latest your-account.dkr.ecr.region.amazonaws.com/sundhar-portfolio:latest

# Push to ECR
docker push your-account.dkr.ecr.region.amazonaws.com/sundhar-portfolio:latest
```

#### Google Cloud Run
```bash
# Tag for GCR
docker tag sundhar-portfolio:latest gcr.io/your-project/sundhar-portfolio:latest

# Push to GCR
docker push gcr.io/your-project/sundhar-portfolio:latest
```

#### Azure Container Instances
```bash
# Tag for ACR
docker tag sundhar-portfolio:latest your-registry.azurecr.io/sundhar-portfolio:latest

# Push to ACR
docker push your-registry.azurecr.io/sundhar-portfolio:latest
```

### 🔧 Environment Variables
- `NODE_ENV=production` (set automatically)
- Add custom variables in docker-compose.yml if needed

### 📊 Health Check
- Endpoint: http://localhost:3000
- Interval: 30 seconds
- Timeout: 10 seconds

### 🛠️ Troubleshooting
```bash
# View logs
docker logs portfolio

# Access container shell
docker exec -it portfolio sh

# Check nginx status
docker exec portfolio nginx -t
```