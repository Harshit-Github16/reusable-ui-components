# Reusable UI Components

A collection of reusable React components with built-in Tailwind CSS styling.

## Installation

```bash
npm install @harshit0150/reusable-ui-components
```

## Usage

### Import Components

```jsx
import { Header, Footer } from '@harshit0150/reusable-ui-components';
import '@harshit0150/reusable-ui-components/styles.css';
```

### Header Component

The Header component is fully customizable and works with any React project:

```jsx
import { Header } from '@harshit0150/reusable-ui-components';

function App() {
  const handleLogoClick = () => {
    console.log('Logo clicked');
  };

  const handleNavClick = (href) => {
    console.log('Navigation clicked:', href);
    // Handle navigation here
  };

  return (
    <Header
      logoText="My App"
      logoHref="/"
      navItems={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" }
      ]}
      onLogoClick={handleLogoClick}
      onNavItemClick={handleNavClick}
    />
  );
}
```

#### Header Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logoText` | string | "Logo" | Text to display as logo |
| `logoHref` | string | "/" | Link for the logo |
| `navItems` | Array | Default navigation items | Array of navigation items with `label` and `href` |
| `onLogoClick` | function | undefined | Callback when logo is clicked |
| `onNavItemClick` | function | undefined | Callback when navigation item is clicked |

### Footer Component

The Footer component is highly configurable:

```jsx
import { Footer } from '@harshit0150/reusable-ui-components';

function App() {
  const handleLinkClick = (href) => {
    console.log('Footer link clicked:', href);
    // Handle footer link clicks here
  };

  return (
    <Footer
      logoText="My Company"
      logoHref="/"
      tagline="Building amazing experiences"
      copyrightText="Copyright © 2024 My Company | All rights reserved"
      sections={[
        {
          title: "Company",
          links: [
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Contact", href: "/contact" }
          ]
        },
        {
          title: "Services",
          links: [
            { label: "Web Development", href: "/services/web" },
            { label: "Mobile Apps", href: "/services/mobile" },
            { label: "Consulting", href: "/services/consulting" }
          ]
        }
      ]}
      onLinkClick={handleLinkClick}
    />
  );
}
```

#### Footer Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | Array | Default sections | Array of footer sections with `title` and `links` |
| `logoText` | string | "Your Logo" | Text to display as logo |
| `logoHref` | string | "/" | Link for the logo |
| `tagline` | string | "Building amazing experiences" | Company tagline |
| `copyrightText` | string | "Copyright © 2024 \| All rights reserved" | Copyright text |
| `onLinkClick` | function | undefined | Callback when footer links are clicked |

## Styling

The components use Tailwind CSS classes. Make sure to include the CSS file in your project:

```jsx
import '@harshit0150/reusable-ui-components/styles.css';
```

### Custom Styling

You can override the default styles by adding your own CSS classes or modifying the Tailwind configuration in your project.

## Framework Compatibility

These components are designed to work with:
- React 18+
- Any React framework (Next.js, Create React App, Vite, etc.)
- Any routing solution (React Router, Next.js Router, etc.)

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
git clone <repository-url>
cd reusable-ui-components
npm install
```

### Build

```bash
npm run build
```

This will create the `dist` folder with:
- ESM and CJS builds
- TypeScript declarations
- CSS file with all styles

### Development

```bash
npm run dev
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions, please open an issue on GitHub.
