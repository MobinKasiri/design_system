# Design System

## Overview

## Architecture

### Core Modules

```
src/
├── components/       # Reusable UI components
├── logical_components/ # Complex logic components
├── theme/           # Theme configuration
├── hooks/           # Custom React hooks
├── store/           # Zustand state management
├── provider/        # Context providers
└── functions/       # Utility functions
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
  - **index.ts**: Exports all common components for easy import.

- **logical_components/**: Components with more complex logic.

  - **Sidebar.tsx**: Manages the sidebar navigation logic and rendering.
  - **Menu.tsx**: Handles the dropdown menu logic and rendering.
  - **index.ts**: Exports logical components and types.

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
    startLine: 1
    endLine: 42
    ```

- **`src/declare_modules.d.ts`**: TypeScript declaration file for extending Material-UI types.

  - Code Reference:

    ```typescript:src/declare_modules.d.ts
    startLine: 1
    endLine: 66
    ```

- **`src/index.ts`**: Main entry point for exporting all modules.

  - Code Reference:
    ```typescript:src/index.ts
    startLine: 1
    endLine: 8
    ```

### Creating and Using the Package

This guide explains how to create a .tgz package from this project and use it in other projects.

#### Package Structure

The project exports various components and utilities through its main entry point:

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
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
