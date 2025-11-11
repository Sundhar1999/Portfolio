#!/bin/bash

# Google Cloud Run FREE TIER Deployment
set -e

echo "🆓 Google Cloud Run FREE Deployment Setup"
echo "=========================================="

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ gcloud CLI not found. Please install it first:"
    echo "   https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Get project ID
echo "📋 Getting your project information..."
PROJECT_ID=$(gcloud config get-value project 2>/dev/null)

if [ -z "$PROJECT_ID" ]; then
    echo "⚠️  No project set. Please run: gcloud config set project YOUR_PROJECT_ID"
    exit 1
fi

echo "✅ Using project: $PROJECT_ID"

# Configuration for FREE tier
REGION="us-central1"
SERVICE_NAME="portfolio"
IMAGE_NAME="gcr.io/$PROJECT_ID/portfolio"

echo "📦 Building Docker image..."
docker build -t $IMAGE_NAME:latest .

echo "⬆️  Pushing to Google Container Registry..."
docker push $IMAGE_NAME:latest

echo "🚀 Deploying to Cloud Run (FREE tier settings)..."

# Deploy with FREE tier optimizations
gcloud run deploy $SERVICE_NAME \
    --image $IMAGE_NAME:latest \
    --platform managed \
    --region $REGION \
    --allow-unauthenticated \
    --port 80 \
    --memory 512Mi \
    --cpu 1 \
    --concurrency 1000 \
    --max-instances 1 \
    --min-instances 0 \
    --timeout 300 \
    --no-cpu-throttling

# Get the service URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format 'value(status.url)')

echo ""
echo "🎉 SUCCESS! Your portfolio is deployed!"
echo "=========================================="
echo "🌐 URL: $SERVICE_URL"
echo "💰 Cost: FREE (within limits)"
echo "📊 Limits: 2M requests/month, 360k GB-seconds/month"
echo ""
echo "📱 Test your deployment:"
echo "   curl $SERVICE_URL"
echo ""
echo "🔧 Manage your service:"
echo "   https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME"