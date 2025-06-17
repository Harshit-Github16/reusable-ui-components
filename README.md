# @harshit0150/reusable-ui-components

Reusable Header and Footer components built with Tailwind CSS for React/Next.js projects.

## Installation

Run the following command in your project:

```bash
npm install @harshit0150/reusable-ui-components
```

## Usage

To use the components in your Next.js project with Tailwind CSS, follow these steps:

### 1. Install the package

If you've just updated the library locally or are installing it for the first time:

```bash
npm install @harshit0150/reusable-ui-components
# Or if installing from a local .tgz file (e.g., after `npm pack` in library project):
# npm install /path/to/your/reusable-ui-components/harshit0150-reusable-ui-components-0.1.24.tgz

# After any update or fresh install, it's recommended to clear cache and reinstall:
rm -rf node_modules .next && npm install
```

### 2. Configure Tailwind CSS in your consuming project

Update your `tailwind.config.js` file in your project to include the component library's files in the `content` array. This ensures Tailwind scans and includes the necessary CSS classes from the library.

```javascript
// tailwind.config.js in your consuming project (e.g., Project A)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... existing paths like './app/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}',

    // Add this line to include your reusable-ui-components package
    './node_modules/@harshit0150/reusable-ui-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ... your project's theme extensions
    },
  },
  plugins: [
    // ... your project's Tailwind plugins
  ],
}
```

### 3. Import the Library's CSS

Import the compiled CSS from the component library into your main global CSS file (e.g., `app/globals.css` in Next.js App Router).

```css
/* globals.css in your consuming project (e.g., Project A) */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import your component library's compiled styles */
@import '@harshit0150/reusable-ui-components/styles.css';

/* ... any other global styles for your project ... */
```

### 4. Use the Components

Import and use the `Header` and `Footer` components. For Next.js projects, especially if you encounter server-side rendering (SSR) issues or re-rendering loops, it's recommended to use dynamic imports with `ssr: false`.

```javascript
// Example in a Next.js layout.js or page.js
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@harshit0150/reusable-ui-components').then(mod => mod.Header), { ssr: false });
const Footer = dynamic(() => import('@harshit0150/reusable-ui-components').then(mod => mod.Footer), { ssr: false });

function MyPage() {
  return (
    <>
      <Header />
      {/* Your page content */}
      <Footer />
    </>
  );
}

export default MyPage;
```

Alternatively, for simpler usage without dynamic imports (if no SSR issues are faced):

```javascript
import { Header, Footer } from '@harshit0150/reusable-ui-components';

function MyComponent() {
  return (
    <>
      <Header />
      {/* Your content */}
      <Footer />
    </>
  );
}
```

## Requirements
- React 17+
- Tailwind CSS (must be set up and configured in your consuming project)

## Note
Make sure your project has Tailwind CSS configured. The components use Tailwind classes, so you need to have Tailwind CSS set up in your project.

---

Feel free to customize the components as needed!

## Available Components

### Header

A responsive header component (with a title prop).

Example:

```jsx
import { Header } from '@harshit0150/reusable-ui-components';

<Header title="Your App Title" />
```

### Footer

A customizable footer component.

Example:

```jsx
"use client";
import React, { useState } from 'react';
import { Footer } from '@harshit0150/reusable-ui-components';

<Footer />
```

## Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Harshit-Github16/reusable-ui-components.git
   cd reusable-ui-components
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Start the development server (if you have a Next.js demo app):
   ```bash
   npm run dev
   ```

4. Build the package (bundles your components):
   ```bash
   npm run build
   ```

5. Link the package to another project:
   ```bash
   npm link @harshit0150/reusable-ui-components
   ```

## Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## License

MIT © harshit0150
# reusable-ui-components
