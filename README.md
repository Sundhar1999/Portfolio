# 🚀 Portfolio - Sundhar Kaleeswaran

> **Live Portfolio:** [https://portfolio-515312046311.us-central1.run.app](https://portfolio-515312046311.us-central1.run.app)

A modern, interactive React-based portfolio showcasing my expertise as an **Associate Software Developer in Test** with advanced animations, AI integration, and cloud deployment.

## ✨ Features

### 🎯 **Core Technologies**
- **React 18** - Modern React with concurrent features and improved performance
- **Vite** - Lightning-fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router v6** - Declarative routing for seamless navigation
- **Framer Motion** - Advanced animations and micro-interactions

### 🎨 **Interactive Elements**
- **Animated UI Components** - Smooth transitions and hover effects
- **Floating Particles** - Dynamic background animations
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- **AI Chatbot Integration** - Interactive assistance for visitors
- **Contact Forms** - EmailJS integration for direct communication

### ☁️ **Cloud-Ready Deployment**
- **Docker Containerization** - Production-ready container setup
- **Google Cloud Run** - Serverless deployment with auto-scaling
- **Nginx Optimization** - Gzip compression and caching
- **HTTPS & CDN** - Automatic SSL certificates and global distribution

## 🌐 **Live Demo**

**Production URL:** [https://portfolio-515312046311.us-central1.run.app](https://portfolio-515312046311.us-central1.run.app)

- ✅ **99.95% Uptime** guaranteed
- ✅ **Global CDN** for fast loading worldwide
- ✅ **Mobile Responsive** design
- ✅ **SEO Optimized** for better visibility

## 📋 Prerequisites

- **Node.js** (v18.x or higher)
- **npm** or **yarn**
- **Docker** (optional, for containerization)
- **Google Cloud CLI** (optional, for deployment)

## 🛠️ Local Development

### **Quick Start**
```bash
# Clone the repository
git clone https://github.com/Sundhar1999/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm start
```

### **Docker Development**
```bash
# Run with Docker Compose
docker-compose up --build

# Access at http://localhost:3000
```

## 📁 Project Architecture

```
Portfolio/
├── 📂 public/                    # Static assets and PWA files
│   ├── 🖼️ assets/images/         # Profile pictures and project images
│   ├── 📄 assets/*.pdf           # Resume and project documents
│   └── 🌐 manifest.json          # PWA configuration
├── 📂 src/
│   ├── 🧩 components/            # Reusable UI components
│   │   ├── ui/                   # Core UI components (Header, Footer, etc.)
│   │   ├── AppIcon.jsx           # Dynamic icon system
│   │   └── ErrorBoundary.jsx     # Error handling
│   ├── 📄 pages/                 # Page components
│   │   ├── home-landing/         # Landing page with hero section
│   │   ├── skills-experience/    # Skills matrix and timeline
│   │   ├── projects-portfolio/   # Project showcase with filters
│   │   └── contact-engagement/   # Contact forms and social links
│   ├── 🎨 styles/               # Global styles and Tailwind config
│   ├── ⚙️ config/               # Configuration files (EmailJS, etc.)
│   ├── 🔧 services/             # API services (OpenAI, Gemini)
│   ├── 🛠️ utils/                # Utility functions
│   ├── 📱 App.jsx               # Main application component
│   ├── 🛣️ Routes.jsx            # Application routing
│   └── 🚀 index.jsx             # Application entry point
├── 🐳 Dockerfile                 # Production container configuration
├── 🔧 docker-compose.yml        # Local development setup
├── ⚙️ nginx.conf                # Web server configuration
├── 📦 package.json              # Dependencies and scripts
├── 🎨 tailwind.config.js        # Tailwind CSS configuration
└── ⚡ vite.config.mjs           # Vite build configuration
```

## 🎨 Design System

### **Color Palette**
- **Primary:** Blue gradient (#3B82F6 → #1D4ED8)
- **Secondary:** Purple accent (#8B5CF6)
- **Background:** Dark theme with glass morphism
- **Text:** High contrast for accessibility

### **Animations**
- **Framer Motion** for smooth page transitions
- **Floating particles** for dynamic backgrounds
- **Hover effects** on interactive elements
- **Loading states** for better UX

## 🚀 Deployment Options

### **🌐 Google Cloud Run (Recommended)**
```bash
# Build and deploy to Google Cloud
./gcp-free-deploy.sh

# Or manually:
gcloud builds submit --tag gcr.io/PROJECT_ID/portfolio .
gcloud run deploy portfolio --image gcr.io/PROJECT_ID/portfolio
```

### **🐳 Docker**
```bash
# Build production image
docker build -t portfolio .

# Run container
docker run -p 8080:8080 portfolio
```

### **📦 Static Build**
```bash
# Build for production
npm run build

# Serve static files
npm run serve
```

## 🔧 Configuration

### **Environment Variables**
```bash
# Create .env file
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_OPENAI_API_KEY=your_openai_key
VITE_GEMINI_API_KEY=your_gemini_key
```

### **Customization**
- **Colors:** Update `tailwind.config.js`
- **Content:** Modify page components in `src/pages/`
- **Animations:** Adjust Framer Motion configs
- **Deployment:** Update `Dockerfile` and deployment scripts

## 📊 Performance

- ⚡ **Lighthouse Score:** 95+ (Performance, Accessibility, SEO)
- 🚀 **First Contentful Paint:** < 1.5s
- 📱 **Mobile Responsive:** 100% compatible
- 🔒 **Security:** HTTPS, CSP headers, secure dependencies

## 🛠️ Development Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm run serve      # Preview production build
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite** - For the lightning-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Google Cloud** - For reliable hosting
- **Lucide React** - For beautiful icons

---

**Built with ❤️ by Sundhar Kaleeswaran**

📧 **Contact:** [sundhar.kaleeswaran@tecsys.com](mailto:sundhar.kaleeswaran@tecsys.com)  
🌐 **Portfolio:** [https://portfolio-515312046311.us-central1.run.app](https://portfolio-515312046311.us-central1.run.app)  
💼 **LinkedIn:** [Connect with me](https://linkedin.com/in/sundhar-kaleeswaran)
