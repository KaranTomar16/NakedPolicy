# NakedPolicy Chrome Extension

Browser extension for instant privacy policy summarization.

## Overview

The Chrome extension allows users to get quick summaries of privacy policies directly while browsing.

## Project Structure

```
Extension/
├── src/                    # Source files
│   ├── manifest.json      # Extension manifest
│   ├── popup/             # Extension popup
│   │   ├── popup.html
│   │   ├── popup.js
│   │   └── popup.css
│   ├── content/           # Content scripts
│   │   ├── content.js
│   │   └── content.css
│   ├── background/        # Background service worker
│   │   └── background.js
│   ├── utils/             # Shared utilities
│   │   ├── api.js
│   │   └── storage.js
│   └── assets/            # Static assets
│       └── icons/
├── dist/                   # Build output (for Chrome)
└── README.md
```

## Development Setup

### Prerequisites

- Node.js 16+
- Chrome browser

### Building the Extension

The `src/` folder contains the development source. To build:

1. Copy files to `dist/` folder
2. Or use a build tool (to be set up)

For now, the extension can be loaded directly from the `dist/` folder.

## Loading in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked"
4. Select the `Extension/dist` folder
5. The extension should now appear in your browser

## Features

- **Popup Interface**: Quick access to summarization
- **Content Scripts**: Detect policy pages automatically
- **Background Service**: Handle API communications
- **Chrome Storage**: Cache summaries locally

## Integration

- **Backend API**: Communicates with `http://localhost:5000`
- **Frontend App**: Opens full summaries at `http://localhost:5173`

## Development

### Source Files

- `src/manifest.json`: Extension configuration
- `src/popup/`: Popup UI shown when clicking the extension icon
- `src/content/`: Scripts injected into web pages
- `src/background/`: Background service worker
- `src/utils/`: Shared utility functions

### API Communication

The extension uses `utils/api.js` to communicate with the backend API.

## Future Improvements

- Set up proper build process (Webpack/Vite)
- Add TypeScript support
- Implement automatic policy detection
- Add user preferences and settings
- Implement caching mechanism

## License

See the main project README for  license information.
