# ReflectAtlas Mock Site

A modern, responsive mock site built with Next.js and optimized for Vercel deployment.

## Features

- Built with Next.js 14 and React 18
- TypeScript for type safety
- Modern CSS modules for styling
- Responsive design with dark mode support
- SEO-friendly with meta tags
- Optimized for Vercel's edge network

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Vercel account (free tier available)

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the site:
```bash
vercel
```

Follow the prompts to configure your deployment. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. Create a production build:
```bash
npm run build
```

2. Go to [vercel.com](https://vercel.com)
3. Drag and drop your project folder or `.next` directory

## Project Structure

```
ReflectAtlas/
├── pages/
│   ├── _app.tsx       # App wrapper component
│   └── index.tsx      # Home page
├── styles/
│   ├── globals.css    # Global styles
│   └── Home.module.css # Home page styles
├── public/
│   └── favicon.ico    # Site favicon
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── next.config.js     # Next.js configuration
└── vercel.json        # Vercel deployment configuration
```

## Environment Variables

No environment variables are required for the basic mock site.

## Customization

- Edit `pages/index.tsx` to modify the home page content
- Update `styles/Home.module.css` to change the styling
- Add new pages in the `pages/` directory
- Add components in a new `components/` directory

## Technologies Used

- **Next.js** - React framework for production
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **CSS Modules** - Scoped styling
- **Vercel** - Deployment and hosting platform

## License

This is a mock site for demonstration purposes.

## Support

For questions or issues, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
