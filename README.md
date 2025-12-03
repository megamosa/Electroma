# Electro Theme - Salla

Modern electronics e-commerce theme for Salla platform.

## Installation

```bash
# Install dependencies
pnpm install

# Build for development
pnpm run development

# Build for production
pnpm run production

# Watch for changes
pnpm run watch
```

## Structure

```
electro-theme/
├── twilight.json          # Theme configuration
├── package.json           # Dependencies
├── webpack.config.js      # Build configuration
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── public/                # Compiled assets
│   ├── app.css
│   ├── app.js
│   └── images/
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   ├── js/
│   │   └── images/
│   ├── locales/
│   │   ├── en.json
│   │   └── ar.json
│   └── views/
│       ├── layouts/
│       ├── pages/
│       └── components/
```

## Features

- ✅ Responsive design
- ✅ RTL support
- ✅ Multi-language (Arabic/English)
- ✅ Salla Twilight components
- ✅ Bootstrap 5
- ✅ Modern UI/UX

## License

MIT
