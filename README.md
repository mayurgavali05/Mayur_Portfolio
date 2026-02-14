# Mayur Gavali - Full Stack Developer Portfolio

A premium, production-ready portfolio website showcasing full-stack development expertise with a modern, dark-themed UI featuring smooth animations and interactive elements.

## Features

- **Hero Section**: Full-screen animated introduction with gradient effects and particle animations
- **About Me**: Professional summary with animated highlight cards
- **Skills**: Categorized technical skills with animated progress bars
- **Experience Timeline**: Animated vertical timeline with company details and achievements
- **Projects Showcase**: Grid layout with detailed project cards and live demo links
- **Live Projects**: Production applications with preview modals
- **Media Gallery**: Guest lecture photos with lightbox preview
- **Video Section**: Video player with download functionality
- **Certifications**: Professional certifications and education details
- **Contact Form**: Fully functional contact form with validation
- **Footer**: Clean footer with social links and quick navigation

## Tech Stack

- **React 18** with TypeScript
- **Vite** for lightning-fast development and builds
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **React Icons** for consistent iconography
- **Fully Responsive** design (desktop-first, mobile-optimized)

## Design Features

- Heavy black theme with purple/blue accents
- Glassmorphism effects
- Smooth scroll animations
- Custom scrollbar styling
- Gradient text effects
- Hover animations on all interactive elements
- Performance-optimized with lazy loading

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deployment

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### Hostinger (or any web host)

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web hosting via FTP or file manager

3. Point your domain to the uploaded files

## Customization

### Personal Information

Update the following files with your personal information:

- **Hero Section**: `src/components/Hero.tsx`
- **About Section**: `src/components/About.tsx`
- **Experience**: `src/components/Experience.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Contact Info**: `src/components/Contact.tsx`

### Resume Download

Place your resume PDF in the `public` folder as `resume.pdf`, or update the link in `src/components/Hero.tsx`

### Media/Videos

- Add images to the `public/images` folder
- Add videos to the `public/videos` folder
- Update the URLs in respective components

### Colors

To change the color scheme, update the gradient classes in Tailwind:
- Primary: `purple-500` to `purple-600`
- Secondary: `blue-500` to `blue-600`

Search and replace these values across components for consistent theming.

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── LiveProjects.tsx
│   │   ├── Media.tsx
│   │   ├── Video.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── resume.pdf (add your resume here)
│   ├── images/ (add your images here)
│   └── videos/ (add your videos here)
└── package.json
```

## Performance Optimization

The portfolio is optimized for performance with:
- Code splitting
- Lazy loading of images
- Optimized animations with Framer Motion
- Efficient re-renders with React hooks
- Production build with minification

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Contact

For questions or support, reach out to:
- Email: mayur.gavali@email.com
- LinkedIn: [linkedin.com/in/mayurgavali](https://linkedin.com/in/mayurgavali)
- GitHub: [github.com/mayurgavali](https://github.com/mayurgavali)

---

Built with React, TypeScript, Tailwind CSS, and Framer Motion
