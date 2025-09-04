Thuto Thabeng Learning Center
A modern, responsive website for Thuto Thabeng Learning Center, an educational institution serving students in grades 7-12 with comprehensive academic programs designed to prepare them for university success.

 About
Thuto Thabeng Learning Center is dedicated to providing quality education and nurturing future leaders through:

Comprehensive academic programs from Grade 7 to Grade 12
Small class sizes for personalized attention
Qualified educators using innovative teaching methods
Proven track record with consistently high pass rates
University preparation focus
 Features
 Interactive Website
Responsive Design: Optimized for desktop, tablet, and mobile devices
Modern UI: Clean, professional design with navy and yellow theme
Smooth Navigation: Active section highlighting and smooth scrolling
Image Gallery: Showcase of learning environments and facilities
Contact System
Functional Contact Form: Powered by EmailJS integration
Instant Feedback: Success/error notifications for form submissions
Email Delivery: Messages sent directly to school administrators
 User Experience
Hero Section: Eye-catching banner with clear call-to-action buttons
Course Information: Detailed subject offerings and grade levels
Academic Results: Track record of student achievements
Compact Mobile Menu: User-friendly navigation for mobile devices
Technical Stack
Frontend Framework: React 19.1.1 with TypeScript
Build Tool: Vite 7.1.3
Styling: Tailwind CSS 4.x with custom theme
Email Service: EmailJS for contact form functionality
Icons: Bootstrap Icons CDN
Development: Hot Module Replacement (HMR) enabled
Quick Start
Prerequisites
Node.js 20.x or higher
npm (comes with Node.js)
Installation
Clone the repository

git clone <repository-url>
cd thutothabeng
Install dependencies

npm install
Set up environment variables Create a .env file in the root directory:

EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
Start development server

npm run dev
The application will be available at http://localhost:5000

EmailJS Setup
To enable the contact form functionality:

Create EmailJS Account: Sign up at emailjs.com
Add Email Service: Connect your Gmail, Outlook, or other email provider
Create Email Template: Design the email template for contact form submissions
Get Credentials:
Service ID: From EmailJS dashboard → Email Services
Template ID: From EmailJS dashboard → Email Templates
Public Key: From EmailJS dashboard → Account → General
 Available Scripts
npm run dev - Start development server (port 5000)
npm run build - Build for production
npm run preview - Preview production build
npm run lint - Run ESLint code analysis
 Project Structure
thutothabeng/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── Gallery/          # School facility images
│   │   ├── Logo.png          # School logo
│   │   └── hero.png          # Hero section background
│   ├── App.tsx               # Main application component
│   ├── App.css               # Custom styles and animations
│   ├── index.css             # Global styles
│   └── main.tsx              # Application entry point
├── .env                      # Environment variables
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite build configuration
Deployment
Replit Deployment
This project is optimized for Replit deployment with:

Host Configuration: 0.0.0.0 for proxy compatibility
Port: 5000 (required for Replit)
Build Command: npm run build
Start Command: npm run preview
Deployment Type: Autoscale (stateless website)
Environment Configuration
Development server allows all hosts (allowedHosts: true)
Environment variables are automatically injected during build
Production build includes all necessary assets
Design Features
Color Scheme
Primary: Navy Blue (#023970)
Accent: Yellow (#ffc107)
Supporting: Cyan (#06b6d4), Gray tones
Responsive Design
Mobile-first approach
Collapsible navigation for small screens
Optimized image loading and display
Touch-friendly interface elements
Animations & Effects
Smooth scrolling between sections
Hover effects on interactive elements
Floating animations on gallery cards
Fade-in animations for form feedback
🔧 Configuration Files
Vite Configuration (vite.config.ts)
React plugin with Fast Refresh
Tailwind CSS integration
Environment variable handling
Development server settings
Host allowance for proxy environments
Tailwind Configuration (tailwind.config.js)
Custom color palette
Extended spacing and typography
Component-specific utilities
Responsive breakpoints
Features Implementation
Hero Section
Background image with optimized overlay (30% opacity)
Call-to-action buttons with smooth scrolling
Responsive text sizing and layout
Navigation
Active section detection with Intersection Observer
Compact mobile menu design
Smooth scroll to sections
Contact Form
Real-time validation
EmailJS integration for sending emails
Loading states and feedback messages
Form reset after successful submission
Gallery
3D card flip animations
Responsive grid layout
Hover effects and floating animations
Performance Optimizations
Vite Build: Fast development and optimized production builds
Image Optimization: Properly sized images for web delivery
Code Splitting: Automatic code splitting via Vite
CSS Purging: Tailwind CSS purges unused styles
Asset Hashing: Cache-busting for production deployment
Development Notes
Recent Improvements
✅ Fixed EmailJS environment variable configuration
✅ Added functional "Book a Session" and "Learn More" buttons
✅ Improved hero section readability with optimized overlay
✅ Optimized mobile navigation for better UX
✅ Configured for Replit deployment environment
✅ Set up production build with all functionality
Browser Support
Modern browsers with ES2020+ support
Mobile Safari and Chrome (iOS)
Android Chrome and Samsung Internet
Desktop Chrome, Firefox, Safari, Edge
📞 Contact Information
For technical support or questions about this website:

Email: Contact form on the website
Academic Inquiries: Use the "Book a Session" feature
