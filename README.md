# YellowZen Website

> Calm insights. Powerful data. A polished, responsive website for exploring finance, statistics, data science, and code.

## 🎨 Overview

YellowZen is a modern, minimalist website showcasing projects and articles in quantitative finance, statistical analysis, and data science. Built with clean HTML, CSS, and JavaScript, the site prioritizes readability, accessibility, and aesthetic excellence.

## ✨ Features

- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Accessibility**: WCAG AA compliant with keyboard navigation and ARIA labels
- **Search & Filters**: Client-side search and category filtering for projects and articles
- **Interactive Charts**: Chart.js integration for data visualizations
- **Modern UI**: Glassmorphism effects, smooth animations, and generous spacing
- **SEO Optimized**: Meta tags, JSON-LD, sitemap.xml, and semantic HTML
- **Newsletter Modal**: Accessible modal for email subscriptions
- **Code Highlighting**: Syntax-highlighted code blocks with copy functionality

## 📁 Project Structure

```
yellowzen/
├── index.html              # Home page
├── about.html              # About page
├── projects.html           # Projects listing
├── project-detail.html     # Project detail template
├── articles.html           # Blog listing
├── article-detail.html     # Article detail template
├── tools.html              # Tools & dashboards placeholder
├── resources.html          # Resources page
├── contact.html            # Contact page
├── css/
│   ├── variables.css       # Design system & color palette (DO NOT EDIT)
│   ├── globals.css         # Global styles
│   ├── components.css      # Reusable components
│   ├── layout.css          # Navigation & footer
│   └── pages.css           # Page-specific styles
├── js/
│   ├── content.js          # Content data (projects & articles)
│   └── main.js             # Main JavaScript functionality
├── images/
│   ├── logo.png
│   ├── zen-wave.png
│   └── hero-illustration.png
└── README.md
```

## 🚀 Local Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Optional: A local web server for development

### Running Locally

**Option 1: Direct File Opening** (Simplest)
1. Navigate to the `yellowzen` folder
2. Double-click `index.html` to open in your browser

**Option 2: Local Web Server** (Recommended for development)

Using Python 3:
```bash
cd d:\codes\webdev\yellowzen
python -m http.server 8000
```

Using Node.js (if installed):
```bash
cd d:\codes\webdev\yellowzen
npx serve
```

Then open `http://localhost:8000` in your browser.

## 📝 Adding Content

### Adding a New Project

1. Open `js/content.js`
2. Add a new project object to the `projects` array:

```javascript
{
  id: 5,
  slug: 'your-project-slug',
  title: 'Your Project Title',
  category: 'Finance & Trading Models', // or other category
  description: 'Short description...',
  image: 'images/your-image.png',
  tags: ['Python', 'Finance'],
  techStack: ['Python', 'NumPy', 'Pandas'],
  github: 'https://github.com/your-repo',
  demo: null,
  featured: false,
  content: {
    overview: '...',
    problem: '...',
    approach: '...',
    results: '...',
    learned: '...'
  }
}
```

3. Add your project image to the `images/` folder

### Adding a New Article

1. Open `js/content.js`
2. Add a new article object to the `articles` array:

```javascript
{
  id: 4,
  slug: 'your-article-slug',
  title: 'Your Article Title',
  excerpt: 'Brief summary...',
  author: 'Your Name',
  date: '2025-01-20',
  readTime: '10 min read',
  image: 'images/article-image.png',
  tags: ['Finance', 'Python'],
  featured: true,
  content: `
    <h2>Section Heading</h2>
    <p>Your content here...</p>
    <pre><code>// Your code here</code></pre>
  `
}
```

## 🎨 Modifying the Color Palette

⚠️ **IMPORTANT**: The color palette is defined in `css/variables.css` with the exact YellowZen brand colors.

**DO NOT EDIT** unless you explicitly need to rebrand. If you must change colors:

1. Open `css/variables.css`
2. Modify the CSS custom properties:

```css
:root {
  --color-primary-start: #FFD54A;  /* Primary gradient start */
  --color-primary-end: #FFF9E6;    /* Primary gradient end */
  --color-bg-primary: #FFFDF6;     /* Background color */
  --color-text-primary: #1F2937;   /* Main text color */
  --color-bg-neutral: #F3F4F6;     /* Neutral background */
  --color-accent: #FFE082;         /* Accent color */
}
```

3. Save and refresh your browser

**Note**: The current palette is carefully chosen for accessibility (WCAG AA contrast) and brand consistency.

## 📊 SEO Configuration

The site includes built-in SEO best practices:

- **Meta Tags**: Each page has unique title and description tags
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Semantic HTML**: Proper heading hierarchy and HTML5 elements
- **Sitemap**: Auto-generated sitemap (create `sitemap.xml` for production)

### Adding JSON-LD Structured Data

Add to the `<head>` of your pages:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "YellowZen",
  "url": "https://yellowzen.com",
  "logo": "https://yellowzen.com/images/logo.png"
}
</script>
```

## 🌐 Deployment

### Deploying to Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `yellowzen` folder to Netlify
3. Your site will be live at `https://your-site-name.netlify.app`

### Deploying to Vercel

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `cd yellowzen && vercel`
4. Follow the prompts

### Deploying to GitHub Pages

1. Push the `yellowzen` folder to a GitHub repository
2. Go to Settings → Pages
3. Select the branch and root folder
4. Your site will be live at `https://username.github.io/repo-name`

## 📈 Analytics Setup

The site is ready for analytics integration. To add Google Analytics:

1. Get your GA4 measurement ID from Google Analytics
2. Add to each HTML page's `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## ♿ Accessibility

The site follows WCAG AA guidelines:

- Keyboard navigation supported throughout
- Focus indicators on all interactive elements
- ARIA labels for screen readers
- Sufficient color contrast (tested)
- Skip links for main content
- Semantic HTML structure
- Responsive to `prefers-reduced-motion`

## 🐛 Troubleshooting

**Images not loading?**
- Check that image paths are correct in `js/content.js`
- Ensure images are in the `images/` folder

**Styles not applying?**
- Verify CSS files are linked in the correct order in `<head>`
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**JavaScript features not working?**
- Check browser console for errors (F12)
- Ensure `js/content.js` is loaded before `js/main.js`

## 📄 License

© 2025 YellowZen. All rights reserved.

## 🤝 Contributing

This is a personal project, but suggestions are welcome! Contact via:
- Email: 
- GitHub: Issues and PRs welcome

## 🙏 Credits

- **Fonts**: Inter from Google Fonts
- **Charts**: Chart.js
- **Icons**: Inline SVG icons
- **Design**: Custom YellowZen brand design

---

Built with ❤️ and ☕ by YellowZen

