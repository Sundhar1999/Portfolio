# 🆓 FREE Google Cloud Deployment Guide

Deploy your portfolio to Google Cloud Run **completely FREE** with these optimized settings.

## 🎯 Free Tier Limits
- **2 million requests/month** 
- **360,000 GB-seconds/month**
- **Automatic HTTPS**
- **Global CDN**
- **Custom domains supported**

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Google Cloud CLI
```bash
# Windows (using PowerShell)
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")
& $env:Temp\GoogleCloudSDKInstaller.exe

# macOS
brew install --cask google-cloud-sdk

# Linux
curl https://sdk.cloud.google.com | bash
```

### Step 2: Setup Project
```bash
# Login to Google Cloud
gcloud auth login

# Create new project (or use existing)
gcloud projects create your-portfolio-project --name="Portfolio"

# Set active project
gcloud config set project your-portfolio-project

# Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

### Step 3: Deploy
```bash
# Make script executable
chmod +x gcp-free-deploy.sh

# Deploy (takes 3-5 minutes)
./gcp-free-deploy.sh
```

## 🔧 Manual Deployment (Alternative)

If you prefer manual steps:

```bash
# 1. Build and push image
docker build -t gcr.io/YOUR_PROJECT_ID/portfolio .
docker push gcr.io/YOUR_PROJECT_ID/portfolio

# 2. Deploy to Cloud Run
gcloud run deploy portfolio \
  --image gcr.io/YOUR_PROJECT_ID/portfolio \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --max-instances 1
```

## 💡 Free Tier Optimizations

Your deployment uses these FREE tier settings:
- **Memory:** 512Mi (sufficient for React app)
- **CPU:** 1 (adequate performance)
- **Max instances:** 1 (stays within free limits)
- **Min instances:** 0 (scales to zero when not used)
- **Concurrency:** 1000 (handles multiple users)

## 🌐 Custom Domain (Optional)

Add your own domain for FREE:

```bash
# Map custom domain
gcloud run domain-mappings create \
  --service portfolio \
  --domain your-domain.com \
  --region us-central1
```

## 📊 Monitor Usage

Check your free tier usage:
```bash
# View service details
gcloud run services describe portfolio --region us-central1

# Check logs
gcloud logs read "resource.type=cloud_run_revision"
```

## 🔒 Security Features (Included FREE)

- ✅ Automatic HTTPS/SSL certificates
- ✅ DDoS protection
- ✅ Global load balancing
- ✅ Automatic scaling
- ✅ Container isolation

## 💰 Cost Breakdown

**Monthly costs for typical portfolio:**
- **Requests:** 50,000/month = $0 (under 2M limit)
- **Compute:** 10 GB-seconds = $0 (under 360k limit)
- **Storage:** Container images = $0 (under 0.5GB limit)
- **Total:** $0/month 🎉

## 🚨 Staying Within Free Limits

**Tips to avoid charges:**
1. Use `--max-instances 1` (already set)
2. Set `--min-instances 0` (scales to zero)
3. Optimize image size (already optimized)
4. Monitor usage monthly

## 🛠️ Troubleshooting

**Common issues:**

1. **"Project not found"**
   ```bash
   gcloud config set project YOUR_ACTUAL_PROJECT_ID
   ```

2. **"Permission denied"**
   ```bash
   gcloud auth login
   gcloud auth configure-docker
   ```

3. **"Service not found"**
   ```bash
   gcloud services enable run.googleapis.com
   ```

## 🎉 What You Get

After deployment:
- ✅ Live portfolio URL (https://portfolio-xxx-uc.a.run.app)
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ 99.95% uptime SLA
- ✅ Automatic scaling
- ✅ Zero maintenance

Your portfolio will be **production-ready** and **globally accessible** at zero cost! 🌍