# @harshit0150/reusable-ui-components

A reusable npm package containing React Header and Footer components (built with Tailwind CSS).

## Installation

Run the following command in your project:

```bash
npm install @harshit0150/reusable-ui-components
```

## Usage

Import the components (Header and Footer) in your React application as follows:

```jsx
import { Header, Footer } from '@harshit0150/reusable-ui-components';

function App() {
  return (
    <div>
      <Header title="My App" />
      {/* Your app content */}
      <Footer />
    </div>
  );
}
```

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
import { Footer } from '@harshit0150/reusable-ui-components';

<Footer />
```

## Development

1. Clone the repository:
   ```bash
   git clone https://github.com/harshit0150/reusable-ui-components.git
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
