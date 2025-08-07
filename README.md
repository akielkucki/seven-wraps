# SevenWraps - Modern Next.js Website

A modern, responsive website built with Next.js 14, featuring a hero section, navigation bar, and comprehensive content sections.

## Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Next.js for optimal loading speeds and SEO
- **Accessible**: Follows web accessibility best practices
- **Easy to Customize**: Well-structured components that are easy to modify and extend

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: JavaScript (ES6+)
- **Icons**: Heroicons via SVG
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
SevenWraps/
├── app/
│   ├── globals.css          # Global styles with Tailwind imports
│   ├── layout.jsx           # Root layout component
│   └── page.jsx             # Home page
├── components/
│   ├── Navbar.jsx           # Navigation component
│   ├── Hero.jsx             # Hero section
│   └── Content.jsx          # Main content sections
├── public/                  # Static assets
└── .github/
    └── copilot-instructions.md  # Copilot customization
```

## Components Overview

### Navbar
- Fixed navigation bar with logo and menu items
- Responsive design with mobile menu button
- Smooth scrolling to page sections

### Hero
- Eye-catching hero section with gradient background
- Call-to-action buttons
- Feature highlights with icons

### Content
- About section with company information
- Services section showcasing offerings
- Contact section with call-to-action

## Customization

### Colors
The project uses a blue and indigo color scheme defined in Tailwind CSS. You can customize colors by modifying the Tailwind classes in the components.

### Content
Update the content in each component file:
- `components/Hero.jsx` - Hero section text and features
- `components/Content.jsx` - About, services, and contact information
- `components/Navbar.jsx` - Navigation links and branding

### Styling
All styling is done with Tailwind CSS. Modify the classes in each component to change the appearance.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the package.json file for details.
