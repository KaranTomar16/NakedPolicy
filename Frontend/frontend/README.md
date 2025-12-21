# NakedPolicy Frontend

React-based web application for the NakedPolicy project - AI-powered privacy policy summarization.

## Overview

This is the frontend web application that allows users to upload policy documents and view AI-generated summaries.

## Project Structure

```
Frontend/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── common/         # Common UI components
│   │   │   └── Navbar.jsx
│   │   └── features/       # Feature-specific components
│   │       ├── PolicyUpload.jsx
│   │       └── SummaryDisplay.jsx
│   ├── pages/              # Page components (to be created)
│   │   ├── LandingPage.jsx
│   │   ├── ServicePage.jsx
│   │   ├── SignInPage.jsx
│   │   └── LoginPage.jsx
│   ├── services/           # API and external services
│   │   └── api.js
│   ├── utils/              # Utility functions
│   │   └── formatters.js
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## New Modular Structure

The frontend has been reorganized from a single 1200+ line `App.jsx` into a modular structure:

### Components

- **`components/common/Navbar.jsx`**: Reusable navigation bar
- **`components/features/PolicyUpload.jsx`**: File upload component
- **`components/features/SummaryDisplay.jsx`**: Summary results display

### Services

- **`services/api.js`**: Centralized API client for backend communication

### Utils

- **`services/formatters.js`**: Utility functions for parsing and formatting summaries

## Setup

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Make sure the backend is running on `http://localhost:5000`

## Running the Application

### Development Mode

```bash
npm run dev
```

The app will start on `http://localhost:5173`

### Using the Batch Script (Windows)

```bash
start-frontend.bat
```

### Production Build

```bash
npm run build
```

## Features

- **Landing Page**: Overview of the service
- ** Service Page**: Upload and analyze policy documents  
- **Sign In / Login Pages**: User authentication (UI only for now)
- **Pricing Page**: Pricing information

## API Integration

The frontend communicates with the backend API at `http://localhost:5000`:

- **POST /summarize**: Submit policy text for analysis
- **GET /summary/:id**: Retrieve a previously generated summary (from extension)

## Extension Integration

The frontend can display summaries from the Chrome extension via URL parameters:

```
http://localhost:5173/?summary=<summary_id>
```

## Technologies

- **React**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

## Development

### Component Structure

Components are organized by type:

- `components/common/`: Reusable UI elements (buttons, forms, etc.)
- `components/features/`: Feature-specific components
- `pages/`: Full page components

### Adding New Components

1. Create component file in appropriate directory
2. Import and use in `App.jsx` or other components
3. Follow existing naming conventions

### Styling

- Uses Tailwind CSS utility classes
- Custom styles in `index.css`
- Consistent dark theme with blue accents

## Future Improvements

- Split large page components from `App.jsx` into separate files in `pages/`
- Add React Router for proper routing
- Implement state management (Context API or Redux)
- Add authentication logic
- Add tests with Vitest

## License

See the main project README for license information.
