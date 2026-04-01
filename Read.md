# Responsive Expandable Cards

A modern, accessible, and performant card component built with **pure CSS** — no JavaScript required.

## ✨ Features

- **Smooth expand animation** — cards grow on hover using CSS flex transitions
- **Grayscale to color** — inactive cards are desaturated; hover reveals full color
- **Shimmer loading effect** — animated placeholder while images load
- **Slide-up description** — additional text reveals from the bottom on hover
- **Keyboard accessible** — full support via `:focus-visible` for keyboard navigation
- **Mobile-first responsive** — cards stack vertically on small screens
- **Touch device support** — `:active` states for tap interactions
- **Reduced motion support** — respects `prefers-reduced-motion` system setting

## 🚀 Demo

Open `index.html` in any modern browser — no build step, no dependencies.

You can also host it instantly with **GitHub Pages**:

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## 📁 Project Structure

```
responsive-expandable-cards/
└── index.html   ← everything lives here (HTML + CSS)
```

## 🛠️ How It Works

All interactive behavior is handled entirely by CSS:

| Feature | CSS Technique |
|---|---|
| Hover expand | `flex` transition on `.card:hover` |
| Grayscale to color | `filter` transition on `img` |
| Slide-up description | `translateY` transform transition |
| Shimmer loading | `@keyframes` background animation |
| Keyboard focus | `:focus-visible` pseudo-class |
| Touch interactions | `:active` pseudo-class |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` |
| Responsive layout | `@media (max-width: 468px)` |

> "The best JavaScript is no JavaScript." — Every browser's rendering engine

## ♿ Accessibility

- All images include descriptive `alt` text
- External links use `rel="noopener noreferrer"` for security
- Images use `loading="lazy"` for performance
- Focus outlines are visible and high-contrast
- Fully operable via keyboard alone

## 🖼️ Customization

To change the cards, edit the `.card` blocks in `index.html`:

```html
<div class="card">
  <a href="YOUR_LINK" target="_blank" rel="noopener noreferrer">
    <img src="YOUR_IMAGE_URL" alt="Description of image" loading="lazy" />
    <div class="card-title">Your Title</div>
    <p class="card-desc">Your description text here.</p>
  </a>
</div>
```

To add or remove cards, simply add or remove `.card` blocks — the flex layout adjusts automatically.

