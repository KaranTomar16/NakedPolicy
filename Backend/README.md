# NakedPolicy Backend

Backend API server for the NakedPolicy project - AI-powered privacy policy summarization.

## Overview

This Flask-based API provides endpoints for analyzing and summarizing privacy policies and terms of service documents using Google's Gemini AI.

## Project Structure

```
Backend/
├── api/                    # API routes and handlers
│   ├── __init__.py
│   └── routes.py          # Flask endpoints
├── services/              # Business logic
│   ├── __init__.py
│   ├── summarizer.py      # AI summarization service
│   └── policy_fetcher.py  # Web scraping utility
├── models/                # Data models
│   └── __init__.py
├── utils/                 # Utility functions
│   └── __init__.py
├── data/                  # Data storage
│   ├── policies/         # Fetched policy documents
│   ├── summaries/        # Generated summaries
│   └── summaries_db.json # Summary database
├── tests/                 # Unit tests
│   ├── __init__.py
│   └── test_summarizer.py
├── config/                # Configuration
│   ├── __init__.py
│   └── config.py
├── app.py                 # Application entry point
├── requirements.txt       # Python dependencies
└── .env.example          # Environment variables template
```

## Setup

### Prerequisites

- Python 3.8+
- pip

### Installation

1. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

2. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env and add your GEMINI_API_KEY
   ```

## Running the Server

### Development Mode

```bash
python app.py
```

The server will start on `http://localhost:5000`

### Using the Batch Script (Windows)

```bash
start-backend.bat
```

## API Endpoints

### POST /summarize

Summarize a policy document.

**Request:**
```json
{
  "text": "Your policy document text here..."
}
```

**Response:**
```json
{
  "summary": "# What You Need to Know\n\n## 🚫 CRITICAL ISSUES..."
}
```

**Error Response:**
```json
{
  "error": "Error message"
}
```

### GET /health

Health check endpoint.

**Response:**
```json
{
  "status": "ok"
}
```

## Configuration

Configuration is managed through `config/config.py` and environment variables:

- `GEMINI_API_KEY`: Your Google Gemini API key
- `FLASK_ENV`: `development` or `production`
- `PORT`: Server port (default: 5000)

## Testing

Run tests with pytest:

```bash
pytest tests/
```

## Policy Fetcher Tool

The `services/policy_fetcher.py` script can be used to fetch policies from websites:

```bash
python services/policy_fetcher.py https://example.com
```

Options:
- `--headful`: Open visible browser
- `--no-block`: Don't block analytics/ads
- `--screenshot-on-failure`: Save debugging screenshots

## Dependencies

- **Flask**: Web framework
- **flask-cors**: CORS support
- **google-generativeai**: Gemini AI integration
- **playwright**: Web scraping (optional)
- **beautifulsoup4**: HTML parsing (optional)
- **python-dotenv**: Environment variable management

## Development

### Adding New Routes

1. Add route handler in `api/routes.py`
2. The route will be automatically registered in `app.py`

### Adding New Services

1. Create a new file in `services/`
2. Import and use in route handlers

## License

See the main project README for license information.
