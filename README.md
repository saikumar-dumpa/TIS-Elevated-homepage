# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focused on high conversion, smoother storytelling, and strong mobile responsiveness for prospective families.

## 🚀 Live Demo
- **Live URL:** [Insert Vercel / Netlify link here]
- **Repository:** [Insert GitHub repository link here]

## 🛠️ Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4 + custom CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel 

## ✨ Standout Features Implemented
1. **Responsive Navigation & Theme Toggle:** Clean desktop and mobile navigation with a compact menu and a light/dark mode switch for a more polished user experience.
2. **High-Impact Hero & School Storytelling:** Conversion-focused hero section, campus messaging, and information-rich school overview blocks designed to build trust quickly.
3. **Animated UI Experience:** Scroll reveal effects, motion-enhanced section transitions, and a custom cursor treatment that adds a premium, modern feel.
4. **Admissions Conversion Flow:** Clear call-to-action sections and an enquiry form that opens a prefilled email draft for easy parent outreach.
5. **Mobile-Friendly Contact Actions:** Quick access to enquiry, call, and WhatsApp actions designed specifically for parents browsing on mobile devices.

## 📦 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

src/
├── App.jsx                  # Homepage assembly
├── main.jsx                 # React application entry point
├── index.css                # Global styles and Tailwind imports
├── assets/                  # Images and project assets
├── components/
│   ├── animation/           # Scroll progress, reveal effects, custom cursor
│   ├── layout/              # Header, footer, mobile contact bar
│   ├── sections/            # Hero, about, campus, admissions, facts, learning
│   └── ui/                  # Reusable UI and enquiry form
├── data/
│   └── homepage.js          # Content and school data used across the homepage
├── hooks/
│   └── useTheme.js          # Theme management for light/dark mode
├── styles/
│   ├── animations.css        # Motion and hover animation styles
│   ├── forms.css            # Form styling and button treatments
│   ├── global.css           # Typography, colors, and global layout defaults
│   ├── layout.css           # Header/footer/layout primitives
│   ├── responsive.css       # Tablet and mobile responsiveness
│   └── sections.css         # Section-specific design rules
├── public/                  # Static public files
├── scripts/                 # Utility scripts
├── package.json             # Project scripts and dependencies
├── vite.config.js          # Vite configuration
├── index.html              # Root HTML entry
└── README.md               # Project documentation
