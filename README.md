# Umesh Chaurasiya - Portfolio Website (Next.js)

A professional portfolio website for Umesh Chaurasiya, an Enterprise Angular & Performance Consultant, built with Next.js 15 and modern web technologies.

## 🚀 Features

- **SEO Optimized**: Built with Next.js App Router, includes metadata, sitemap, and robots.txt
- **Static Site Generation**: Pre-rendered for optimal performance and SEO
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Performance Focused**: Optimized for Core Web Vitals
- **Accessible**: Following WCAG guidelines with semantic HTML
- **Component Library**: Using Radix UI and Lucide React icons

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

## 🛠️ Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🏃‍♂️ Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The static files will be generated in the `out` directory.

## 🚀 Deployment

This is a static site that can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Deploy the `out` directory
- **GitHub Pages**: Upload the `out` directory to your gh-pages branch
- **AWS S3/CloudFront**: Upload the `out` directory to S3
- **Any static hosting**: Simply upload the `out` directory

## 📁 Project Structure

```
mercurion-consulting/
├── app/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components (Radix UI)
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── ExperienceAuthority.tsx
│   │   ├── Expertise.tsx
│   │   ├── ConsultingServices.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── ConsultingApproach.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Sitemap for SEO
│   └── manifest.ts        # PWA manifest
├── lib/
│   └── utils.ts           # Utility functions
├── public/
│   └── robots.txt         # Search engine instructions
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🎨 Technologies

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Language**: TypeScript
- **Build Output**: Static HTML (SSG)

## 📊 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags for social sharing (Open Graph, Twitter Cards)
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt for crawler instructions
- ✅ Structured data ready
- ✅ Mobile-friendly and responsive
- ✅ Fast loading times with static generation
- ✅ PWA manifest

## 🎯 Key Sections

1. **Hero**: Introduction and main call-to-action
2. **About**: Professional background and credentials
3. **Expertise**: Technical skills and specializations
4. **Services**: Consulting service offerings
5. **Case Studies**: Real-world project examples with metrics
6. **Approach**: Consulting methodology
7. **Blog**: Technical articles and insights
8. **Contact**: Contact information and social links

## 🔧 Customization

### Update Personal Information

Edit the following files:
- `app/layout.tsx` - Update metadata (title, description, keywords)
- `app/components/Hero.tsx` - Update name and tagline
- `app/components/Contact.tsx` - Update email and social links
- `app/sitemap.ts` - Update your domain URL

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes in components

## 📝 License

This project is private and proprietary.

## 👤 Author

**Umesh Chaurasiya**
- Email: contact@mercurionconsulting.com
- LinkedIn: [umeshchaurasiya](https://www.linkedin.com/in/uc1990/)

---

Built with ❤️ using Next.js and React
