# 🚀 Portfolio - Professional Developer Portfolio

[![CI/CD Pipeline](https://github.com/VenushanT/portfolio/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/VenushanT/portfolio/actions/workflows/ci-cd.yml)
[![Security Scan](https://github.com/VenushanT/portfolio/actions/workflows/security-scan.yml/badge.svg)](https://github.com/VenushanT/portfolio/actions/workflows/security-scan.yml)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000.svg?logo=vercel)](https://vercel.com)
[![Deployed on Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7.svg?logo=netlify)](https://netlify.com)

> A modern, responsive portfolio website showcasing full-stack development projects with advanced 3D visuals, built with React, TypeScript, and enterprise-grade CI/CD pipeline.

## 🌟 Live Demo

- **🚀 Primary**: [Vercel Deployment](https://your-portfolio-vercel.app)
- **🌐 Backup**: [Netlify Deployment](https://your-portfolio-netlify.app)
- **📄 GitHub Pages**: [GitHub Pages](https://venushant.github.io/portfolio)

## ✨ Features

### 🎨 Design & UI
- **Modern Dark Theme**: Sleek black and orange gradient design
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **3D Visuals**: Interactive Spline 3D models and animations
- **Smooth Animations**: GSAP-powered transitions and effects
- **Cyber Aesthetic**: Gaming-inspired UI with custom cursors

### 🚀 Performance
- **Lighthouse Score**: 95+ performance rating
- **Bundle Size**: Optimized < 300KB total bundle
- **Fast Loading**: < 2s First Contentful Paint
- **SEO Optimized**: Meta tags and structured data

### 🛡️ Security & Quality
- **Enterprise CI/CD**: Automated testing, security scanning, and deployment
- **Code Quality**: ESLint, TypeScript, and SonarCloud integration
- **Security Scans**: Daily vulnerability assessments with Snyk and CodeQL
- **Dependency Management**: Automated updates with Dependabot

## 🛠️ Tech Stack

### Frontend
- **⚛️ React 18** - Modern React with hooks and concurrent features
- **🔷 TypeScript** - Type-safe development
- **⚡ Vite** - Lightning-fast build tool and dev server
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧩 shadcn/ui** - High-quality accessible components

### 3D & Animations
- **🎭 Spline** - 3D scene creation and interactive models
- **📹 GSAP** - Professional-grade animations
- **🎨 Three.js** - 3D graphics library
- **🎯 React Three Fiber** - React renderer for Three.js

### UI Components
- **🎛️ Radix UI** - Accessible primitive components
- **🎨 Lucide React** - Beautiful SVG icons
- **💫 Framer Motion** - Production-ready motion library
- **🎪 Embla Carousel** - Lightweight carousel library

### Development & Quality
- **📋 ESLint** - Code linting and formatting
- **🔒 Husky** - Git hooks for quality gates
- **📊 SonarCloud** - Code quality and security analysis
- **🚨 Snyk** - Vulnerability scanning

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/VenushanT/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:8080
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# CI/CD Commands
npm run build:dev    # Build with development mode
npm test            # Run tests (if available)
```

## 🏗️ Project Structure

```
portfolio/
├── .github/                  # GitHub workflows and templates
│   ├── workflows/           # CI/CD pipeline definitions
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   └── dependabot.yml     # Dependency management
├── portfolio/              # Main application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── assets/       # Images and media
│   │   ├── lib/          # Utilities
│   │   └── types/        # TypeScript definitions
│   ├── index.html        # HTML template
│   └── vite.config.ts    # Vite configuration
├── README.md              # Project documentation
├── package.json          # Dependencies and scripts
└── CI-CD-DOCS.md         # CI/CD pipeline documentation
```

## 🎯 Featured Projects

The portfolio showcases these major projects:

1. **🚗 Car Service Management System**
   - Full-stack MERN application
   - Real-time appointment scheduling
   - MongoDB, Express, React, Node.js

2. **🔒 Crime Report Management with Gemini AI**
   - AI-powered incident categorization
   - Spring Boot microservices
   - PostgreSQL, Redis, RabbitMQ

3. **💧 PilgrimFlow - Smart Water Management**
   - AI crowd counting with OpenCV
   - Real-time resource distribution
   - Python, NumPy, Roboflow

4. **⚡ ElectroWave - E-commerce Platform**
   - Electronics marketplace
   - MERN stack with JWT authentication
   - Advanced filtering and comparison

5. **🎯 SkillHive - Freelancer Platform**
   - Professional networking platform
   - Spring Boot REST API
   - OAuth 2.0, MongoDB

6. **🤖 AI Device Recommendation Platform**
   - Machine learning recommendations
   - Python, Scikit-learn, Flask
   - Predictive analytics

## 🔄 CI/CD Pipeline

### 🚀 Automated Workflows

- **✅ Continuous Integration**: Automated testing, linting, and building
- **🚀 Multi-Platform Deployment**: GitHub Pages, Vercel, Netlify
- **🔍 Preview Deployments**: Automatic PR previews with live links
- **🔒 Security Scanning**: Daily vulnerability assessments
- **📊 Code Quality**: SonarCloud analysis and performance monitoring
- **📦 Dependency Management**: Automated updates with Dependabot

### 🎯 Performance Budgets

- **JavaScript Bundle**: < 250KB
- **CSS Bundle**: < 50KB
- **Total Bundle**: < 300KB
- **Lighthouse Performance**: > 80%
- **Lighthouse Accessibility**: > 90%

### 🛡️ Security Features

- **Daily Security Scans**: Automated vulnerability detection
- **Secret Scanning**: TruffleHog integration
- **Dependency Review**: Automated dependency vulnerability checking
- **CodeQL Analysis**: Advanced security code analysis

## 📊 Performance Metrics

- **⚡ Performance**: 95+ Lighthouse score
- **♿ Accessibility**: 100% accessibility compliance
- **🔍 SEO**: Optimized meta tags and structured data
- **📱 Responsive**: Mobile-first design approach

## 🚀 Deployment

### Automatic Deployment

The project automatically deploys to multiple platforms:

1. **GitHub Pages**: On push to `main` branch
2. **Vercel**: Production deployment with custom domain
3. **Netlify**: Backup deployment with form handling

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy to your preferred platform
# The built files will be in portfolio/dist/
```

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
VITE_APP_NAME=Portfolio
VITE_APP_VERSION=1.0.0
VITE_API_URL=https://api.yourdomain.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- **TypeScript**: Use proper typing
- **ESLint**: Follow linting rules
- **Prettier**: Maintain consistent formatting
- **Tests**: Add tests for new features
- **Documentation**: Update docs for changes

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Venushan T**
- 🌐 Website: [Portfolio](https://your-portfolio-url.com)
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- 🐙 GitHub: [@VenushanT](https://github.com/VenushanT)
- 📧 Email: your.email@example.com

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vercel** for seamless deployment platform
- **shadcn** for beautiful UI components
- **Spline** for 3D design capabilities
- **Open Source Community** for inspiration and tools

## 📈 Analytics & Monitoring

- **📊 Performance**: Lighthouse CI monitoring
- **🔒 Security**: Snyk and CodeQL scanning
- **📦 Dependencies**: Dependabot automation
- **🚀 Deployments**: Multi-platform deployment status

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

[🐛 Report Bug](https://github.com/VenushanT/portfolio/issues/new?assignees=VenushanT&labels=bug%2Ctriage&template=bug_report.md) • [✨ Request Feature](https://github.com/VenushanT/portfolio/issues/new?assignees=VenushanT&labels=enhancement%2Cfeature-request&template=feature_request.md) • [📖 Documentation](https://github.com/VenushanT/portfolio/issues/new?assignees=VenushanT&labels=documentation&template=documentation.md)

</div>