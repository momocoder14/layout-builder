# Responsive Layout Builder

A utility library for creating responsive container layouts in React. It allows you to easily create flexible, grid-based containers that adapt to different screen sizes with customizable breakpoints.

## Features

- **Responsive Containers**: Create grids and layouts that automatically adjust based on screen size.
- **Customizable Breakpoints**: Define your own breakpoints for responsive designs.
- **Utility Functions**: Includes functions for generating CSS grid styles and managing class names.
- **Nested Containers**: Easily create nested grid layouts.
- **Flexibility**: Supports customizable column counts, gaps, and styling.

## Installation

To install this package in your React project, run the following command:

```bash
npm install @momocoder14/layout-builder
```

## Usage
1. ResponsiveContainer Component: The ResponsiveContainer component allows you to create responsive layouts with configurable columns and gaps.

```tsx
import React from 'react';
import { ResponsiveContainer } from '@momocoder14/layout-builder';

const App = () => {
  return (
    <ResponsiveContainer columns={4} gap="20px">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </ResponsiveContainer>
  );
};

export default App;

```

2. Utility Functions:
You can also use the utility functions for more control over your layouts.

**generateGridStyles**

This function generates the necessary CSS grid styles for a given number of columns and gap.

```tsx
import { generateGridStyles } from '@momocoder14/layout-builder';

const styles = generateGridStyles(3, '10px');
console.log(styles);
// Output: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }
```

**generateResponsiveGridStyles**

This function generates responsive grid styles based on custom breakpoints.

```tsx
import { generateResponsiveGridStyles, DEFAULT_BREAKPOINTS } from '@momocoder14/layout-builder';

const responsiveStyles = generateResponsiveGridStyles(DEFAULT_BREAKPOINTS);
console.log(responsiveStyles);
```
3. Custom Breakpoints
You can define your own breakpoints and use them in the responsive grid generation.

```tsx
Copy code
import { DEFAULT_BREAKPOINTS, generateMediaQuery } from '@momocoder14/layout-builder';

const customBreakpoints = {
  sm: '600px',
  md: '900px',
  lg: '1200px',
};

const query = generateMediaQuery(customBreakpoints.md);
console.log(query); // Output: '@media (min-width: 900px)'
```
## Configuration
The default breakpoints are:

```typescript
export const DEFAULT_BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};
```

You can easily override these in your project by importing and modifying them as needed.

## Development
1. Setup
Clone the repository and install dependencies:

```bash
git clone https://github.com/momocoder14/layout-builder.git
cd layout-builder
npm install
```

2. Building
To build the package, run the following command:

```bash
npm run build
```

This will transpile the TypeScript code and generate the output in the dist/ folder.

3. Testing
Run tests using Jest:

```bash
npm run test
```

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature/your-feature).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details. ![License](https://img.shields.io/badge/license-MIT-green)
