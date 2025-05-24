# Personal Portfolio Website

A modern and creative portfolio website built with Next.js and Three.js, featuring interactive 3D animations and a sleek design.

## Features

- Interactive 3D background using Three.js
- Smooth animations with Framer Motion
- Responsive design
- Modern UI with Tailwind CSS
- TypeScript support

## Tech Stack

- Next.js 14
- React Three Fiber
- Three.js
- Framer Motion
- Tailwind CSS
- TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000/portfolio](http://localhost:3000/portfolio) with your browser to see the result.

## Deploying to GitHub Pages

1. Make sure your repo is set up with a `gh-pages` branch:
```bash
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initialize gh-pages"
git push origin gh-pages
git checkout main
```

2. Deploy:
```bash
npm run deploy
```

This will build and export the site to the `out` directory and push it to the `gh-pages` branch. Your site will be available at:

```
https://lemon.github.io/portfolio/
```

## Project Structure

```
portfolio-website/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   └── styles/           # Global styles
└── public/               # Static assets
```

## Customization

- Update the content in `src/app/page.tsx` and components in `src/components/` to personalize your portfolio
- Modify the 3D scene in `src/components/three/Scene.tsx`
- Adjust colors and styles in `tailwind.config.ts`

## License

MIT
