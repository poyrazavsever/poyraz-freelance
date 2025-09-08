<div align="center">
  <img src="public/logos/logo250.png" alt="Logo" width="80" height="80">
  
  <h3>Poyraz Avsever's Freelance Platform</h3>
  
  <p>A comprehensive platform for strengthening relationships between freelancers and clients</p>

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.12-pink)](https://www.framer.com/motion/)

</div>

---

## About This Project

This is a **hobby project** currently in **development phase** that I'm building in my free time. The platform aims to strengthen relationships between freelancers and their clients by providing better communication tools and project management features.

The goal is to create a comprehensive solution that helps freelancers showcase their work, manage client relationships, and deliver exceptional service while giving clients a clear view of project progress and easy communication channels.

## Features

### Current Implementation

- **Responsive Navigation System**
  - Desktop: Advanced dropdown menus with animated cards
  - Mobile: Full-page burger menu with submenu navigation
  - Theme switching (Light/Dark/System)
  - Social media integration

- **Professional Landing Page**
  - Hero section with availability status
  - Animated statistics and call-to-action buttons
  - Gradient backgrounds with floating elements

- **Design System**
  - Custom color palette with primary color (#ffbd59)
  - Consistent typography and spacing
  - Dark mode support with proper color schemes
  - Animation system using Framer Motion

- **Corporate Footer**
  - Comprehensive link structure
  - Newsletter subscription
  - Contact information
  - Social media links

### Planned Features

- **Client Dashboard**
  - Project progress tracking
  - Communication history
  - File sharing system
  - Invoice and payment management

- **Freelancer Portfolio**
  - Project showcase
  - Skill demonstration
  - Testimonials and reviews
  - Availability calendar

- **Communication Tools**
  - Real-time messaging
  - Video call integration
  - Project comments and feedback
  - Notification system

- **Project Management**
  - Task tracking
  - Milestone management
  - Time tracking
  - Deliverable management

## Tech Stack

### Frontend
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library

### UI Components
- **@iconify/react 6.0.1** - Comprehensive icon system
- **react-hot-toast 2.6.0** - Toast notifications
- **Custom Button System** - Reusable component library

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **PNPM** - Package manager

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- PNPM (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/poyrazavsever/freelance-poyraz.git
cd freelance-poyraz
```

2. Install dependencies
```bash
pnpm install
```

3. Run the development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
freelance-poyraz/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Site layout group
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/                   # React components
│   ├── layout/                   # Layout components
│   │   ├── navbar.tsx           # Navigation with mobile support
│   │   └── footer.tsx           # Corporate footer
│   ├── shared/                   # Shared components
│   │   └── button.tsx           # Button component system
│   └── futures/                  # Feature-specific components
│       └── home/
│           └── heroSection.tsx   # Landing page hero
├── public/                       # Static assets
│   ├── images/
│   └── logos/
├── next.config.ts               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Design System

### Color Palette

- **Primary**: #ffbd59 (Golden yellow)
- **Secondary**: #ffd28d (Light golden)
- **Dark Background**: #1a1a1a
- **Neutral Grays**: Various shades for text and backgrounds

### Typography

The project uses a systematic approach to typography with:
- Consistent font weights (400, 500, 600, 700)
- Responsive font sizes
- Proper line heights and letter spacing
- Dark mode optimized colors

### Components

- **Button System**: Multiple variants (primary, secondary, outline, ghost, gradient)
- **Animation System**: Consistent motion patterns using Framer Motion
- **Icon System**: Comprehensive icons from Iconify
- **Toast System**: Custom styled notifications

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use Tailwind CSS for styling
- Implement responsive design mobile-first

### Component Structure
- Create reusable components in `/components/shared/`
- Feature-specific components in `/components/futures/`
- Layout components in `/components/layout/`

### Animation Guidelines
- Use Framer Motion for complex animations
- Keep animations smooth and purposeful
- Respect user's reduced motion preferences
- Use consistent timing and easing

## Contributing

This is a personal hobby project, but suggestions and feedback are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Social Media & Contact

- **Website**: [poyrazavsever.com](https://poyrazavsever.com)
- **LinkedIn**: [linkedin.com/in/poyrazavsever](https://www.linkedin.com/in/poyrazavsever/)
- **GitHub**: [github.com/poyrazavsever](https://www.github.com/poyrazavsever)
- **Instagram**: [instagram.com/poyraz_avsever](https://www.instagram.com/poyraz_avsever/)
- **YouTube**: [youtube.com/@poyrazavsever](http://youtube.com/@poyrazavsever)
- **Medium**: [medium.com/@poyrazavsever](https://medium.com/@poyrazavsever)
- **Behance**: [behance.net/poyrazavsever](https://www.behance.net/poyrazavsever)
- **Buy Me a Coffee**: [buymeacoffee.com/poyrazavsever](https://www.buymeacoffee.com/poyrazavsever)

## License

This project is for educational and portfolio purposes. All rights reserved.

---

**Note**: This project is actively being developed in my spare time. Features and functionality may change as the project evolves. The goal is to create a meaningful tool that helps freelancers and clients work together more effectively.