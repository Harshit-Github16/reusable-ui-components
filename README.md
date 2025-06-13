# @harshit0150/reusable-ui-components

Reusable Header and Footer components built with Tailwind CSS for React/Next.js projects.

## Installation

Run the following command in your project:

```bash
npm install @harshit0150/reusable-ui-components
```

## Usage

First, import the CSS in your main application file (e.g., `_app.js`, `layout.js`, or `index.js`):

```javascript
// Import the CSS
import '@harshit0150/reusable-ui-components/styles.css';
```

Then use the components:

```javascript
import { Header, Footer } from '@harshit0150/reusable-ui-components';

function App() {
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
- Tailwind CSS (should be set up in your project)

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
