# SpillDong - Local Business Directory for Students

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)](https://www.typescriptlang.org/)

A modern, student-focused local business directory platform built with the latest web technologies. Discover laundry services, food spots, stores, and pharmacies near your campus with a beautiful, accessible interface.

## ✨ Features

- 🌓 **Dark Mode** - Seamless theme switching with no flash
- 📱 **Fully Responsive** - Mobile-first design that works everywhere
- ⚡ **Lightning Fast** - Optimized for performance (>90 Lighthouse score)
- 🎭 **Smooth Animations** - Framer Motion powered micro-interactions
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🔍 **SEO Optimized** - Built-in sitemap and meta tags
- 🧭 **Smart Navigation** - Transparent-to-solid navbar with scroll detection

## 🚀 Tech Stack

### Core Framework
- **Next.js 16.0** with App Router
- **React 19.2** with Server Components
- **TypeScript 5** for type safety

### Styling
- **Tailwind CSS v4** with custom design tokens
- **tw-animate-css** for extended animations
- **Framer Motion** for complex animations
- **shadcn/ui** component patterns

### UI Components
- **Radix UI** for accessible primitives
- **Lucide React** for beautiful icons
- **CVA** (Class Variance Authority) for variant management

### Developer Experience
- **ESLint** with Next.js config
- **Babel React Compiler** enabled
- **Hot Reload** with Fast Refresh

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/WHEN-YH-MIA-2025/frontend_web.git

# Navigate to project directory
cd frontend_web

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎨 Design System

### Brand Colors
The project uses a custom brand color scale (indigo-like) available through Tailwind:
- `bg-brand`, `text-brand` - Default brand color
- `bg-brand-{50-900}` - Full color scale
- Automatically adapts to dark mode

### Components
All components follow these principles:
- **Variant-based** - Using CVA for consistent variants
- **Animated** - Smooth transitions and micro-interactions
- **Accessible** - Proper ARIA labels and keyboard navigation
- **Responsive** - Mobile-first approach

### Navigation
- **Desktop**: Transparent navbar that becomes solid on scroll
- **Mobile**: Fixed header + bottom navigation bar
- **Scroll threshold**: 50px
- **Smooth transitions**: 300ms duration

## 🌐 Pages

### Homepage (`/`)
- Hero section with animated background
- Statistics showcase
- Category cards
- Features section
- CTA sections

### About (`/about`)
- Mission statement
- Core values
- Team showcase
- Statistics
- Contact CTA

### Maps (`/maps`)
- Coming soon!

### Businesses (`/umkm`)
- Business listings
- Search and filter
- Category navigation
- Business cards with details

## 📱 Mobile Optimization

- Bottom navigation bar with pill design
- Touch-friendly targets (44x44px minimum)
- Optimized for one-handed use
- Safe area support for notched devices

## 🎭 Animations

All animations follow these guidelines:
- Use `framer-motion` for complex animations
- Leverage `tw-animate-css` for simple utilities
- Respect `prefers-reduced-motion`
- 60fps smooth animations
- Debounced scroll listeners (10ms)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
SITE_URL=https://spilldong.app
```

### Tailwind Configuration
Custom design tokens are defined in `app/globals.css`:
- Color system with dark mode support
- Custom brand colors
- Spacing and typography scales

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📊 Performance Targets

- **Lighthouse Performance**: >90
- **Lighthouse Accessibility**: >95
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

Built by students, for students at WHEN-YH-MIA-2025.

## 🐛 Bug Reports

Found a bug? Please [open an issue](https://github.com/WHEN-YH-MIA-2025/frontend_web/issues).

## 📞 Support

For questions or support, reach out to:
- Email: team@spilldong.app
- GitHub Issues: [Project Issues](https://github.com/WHEN-YH-MIA-2025/frontend_web/issues)

---

**Made with ❤️ by the SpillDong Team**
