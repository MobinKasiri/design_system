# Design System

## Table of Contents

- [Architecture](#architecture)
  - [Core Modules](#core-modules)
  - [UI Components](#-ui-components)
  - [Development Tools](#-development-tools)
  - [Architecture Details](#-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Setup](#local-setup)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
  - [src/ Directory](#src)
  - [Important Files](#important-files)
- [TypeScript Declarations](#typescript-declarations)
  - [Custom Palette Colors](#custom-palette-colors)
  - [Custom Breakpoints](#custom-breakpoints)
  - [Extended Typography Variants](#extended-typography-variants)
- [Creating and Using the Package](#creating-and-using-the-package)
  - [Creating the Package](#creating-the-package)
  - [Using the Package](#using-the-package)
  - [Importing Components](#importing-components)
- [Contributing](#contributing)

## Architecture

#### Core Modules

```
src/
├── components/           # Reusable UI components
├── logical_components/   # Complex logic components
├── theme/                # Theme configuration
├── hooks/                # Custom React hooks
├── store/                # Zustand state management
├── provider/             # Context providers
└── functions/            # Utility functions
```

This project is a React-based web application built with TypeScript and Material-UI. It is designed to be modular, scalable, and maintainable, featuring a responsive UI, custom hooks, and a theme system for consistent styling.

### 🎨 UI Components

- Pre-built, accessible Material-UI components
- Responsive design patterns
- Customizable card variants
- Navigation components (Breadcrumb, TabBar)
- Modal and dialog systems

### 🛠 Development Tools

- **TypeScript Support** - Full type safety and enhanced IDE integration
- **Custom Hooks** - Reusable logic for common patterns
- **State Management** - Integrated Zustand store
- **Utility Functions** - Common helpers for URLs, storage, and more

### 🎯 Architecture

- **Modular Design** - Independent, composable components
- **Scalable Structure** - Organized for large applications
- **Theme System** - Customizable design tokens
- **Provider System** - Context-based configuration

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Local Setup

```bash
# Clone repository
git clone https://github.com/Mobinksiri/design_system.git

# Install dependencies
cd design-system
npm install

# Start development server
npm start
```

### Running the Application

To start the development server, run:

The application will be available at `http://localhost:3000`.

## Project Structure

### `src/`

- **components/**: Contains reusable UI components.

  - **common/**: Shared components like `Breadcrumb`, `TabBar`, and `Card`.
    - **card/**: Different card components such as `CategoryCard`, `HorizontalCard`, `VerticalCard`, and `IconCard`.
    - **googleIcon/**: A component for rendering Google icons.
    - **section/**: Components for section headers and titles.
    - **underDevelopment/**: A placeholder component indicating a page is under development.

- **logical_components/**: Components with more complex logic.

  - **Sidebar.tsx**: Manages the sidebar navigation logic and rendering.
  - **Menu.tsx**: Handles the dropdown menu logic and rendering.

- **theme/**: Theme configuration and Material-UI component overrides.

  - **options/**: Contains customizations for Material-UI components like `MuiMenu`, `MuiCard`, and `MuiLink`.
  - **theme.tsx**: Defines the theme settings, including palette, typography, and component overrides.

- **functions/**: Utility functions for various operations.

  - **index.ts**: Exports utility functions like `addQueryToUrlFunction` and local storage helpers.

- **hooks/**: Custom React hooks for handling specific logic.

- **store/**: State management using Zustand.

- **provider/**: Context providers for theming and other global settings.

- **colors/**: Defines color palettes used throughout the application.

- **declare_modules.d.ts**: TypeScript declaration file for extending Material-UI types.

### Important Files

- **`src/theme/theme.tsx`**: Configures the application's theme, including palette, typography, and component overrides.

  - Code Reference:

    ```typescript:src/theme/theme.tsx
    const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
      const theme = createTheme({
      breakpoints,
    });
    const returnValue: ThemeOptions = {
      palette: { ...paletteOptions[mode] },
      typography: typography(theme),
      breakpoints,
      components: {
         MuiButton,
         MuiCard,
         MuiCardMedia,
         MuiCardContent,
         MuiCardActions,
         MuiLink,
         MuiContainer: MuiContainer(theme),
         MuiMenuItem,
         MuiTextField,
         MuiMenu: MuiMenu(theme),
      },
      shadows: customShadows(theme),
    };
    return returnValue;
    };
    const theme = (mode: PaletteMode): ThemeOptions =>
      createTheme(getDesignTokens(mode));
    ```

- **`src/index.ts`**: Main entry point for exporting all modules.

  - Code Reference:
    ```typescript:src/index.ts
    export * from "./components";
    export * from "./theme";
    export * from "./functions";
    export * from "./hooks";
    export * from "./patterns";
    export * from "./store";
    export * from "./provider";
    export * from "./logical_components";
    ```

## TypeScript Declarations

The design system extends Material-UI's default types through declaration files to provide additional customization options:

### Custom Palette Colors

```typescript
// Added new color options to the palette
interface Palette {
  gray: PaletteColor;
  pink: PaletteColor;
  yourColor: PaletteColor;
}

// These colors can be used with buttons
<Button color="gray">Gray Button</Button>
<Button color="pink">Pink Button</Button>
<Button color="yourColor">Your Color Button</Button>
```

### Custom Breakpoints

The default Material-UI breakpoints (xs, sm, md, lg, xl) have been replaced with more specific breakpoints:

```typescript
interface BreakpointOverrides {
  zero: true; // 0px
  mobileS: true; // mobile small
  tabletM: true; // tablet medium
  tabletL: true; // tablet large
  desktopS: true; // desktop small
  desktopM: true; // desktop medium
  desktopL: true; // desktop large
  desktopXl: true; // desktop extra large
}
```

### Extended Typography Variants

Additional typography variants have been added for more precise text styling:

```typescript
// New Button Typography Variants
buttonSmall: React.CSSProperties;
buttonMedium: React.CSSProperties;
buttonLarge: React.CSSProperties;

// New Text Typography Variants
subtitle3: React.CSSProperties;
body3: React.CSSProperties;
label1: React.CSSProperties;
label2: React.CSSProperties;
label3: React.CSSProperties;

// Usage example:
<Typography variant="buttonSmall">Small Button Text</Typography>
<Typography variant="label1">Label Text</Typography>
```

These type declarations ensure full TypeScript support while using custom theme extensions. They provide autocompletion and type checking for the custom properties in your IDE.

### Creating and Using the Package

This guide explains how to create a .tgz package from this project and use it in other projects.

#### Creating the Package

<!-- change version number -->

Update package.json

```json:package.json
{
  "version": "x.x.x"
}
```

To create a .tgz package, run the following command:

```bash
npm run pack
```

#### Using the Package

To use the package in another project, install it using npm or yarn:

```bash
npm install path/to/the/design_system-x.x.x.tgz
# or
yarn add path/to/the/design_system-x.x.x.tgz
```

#### Importing Components

After installing the package, you can import and use the components like this:

```typescript
import { BreadCrumb } from "design_system";

const array = [
  { title: "Home", href: "/" },
  { title: "Categories", href: "/categories" },
  { title: "Products", href: "/categories/products" },
  { title: "Details", href: "/categories/products/details" },
];

const Home = () => {
  return <BreadCrumb array={array} />;
};
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
