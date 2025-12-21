"""Configuration management for NakedPolicy backend."""
import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    """Base configuration."""
    
    # API Configuration
    API_KEY = os.environ.get("GEMINI_API_KEY") or "AIzaSyD6K1gcGuGZb0L-kiWMZzpERk4wBWCRm-M"
    
    # Flask Configuration
    DEBUG = os.environ.get("FLASK_ENV") == "development"
    PORT = int(os.environ.get("PORT", 5000))
    
    # File Storage
    DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data")
    POLICIES_DIR = os.path.join(DATA_DIR, "policies")
    SUMMARIES_DIR = os.path.join(DATA_DIR, "summaries")
    SUMMARIES_DB = os.path.join(DATA_DIR, "summaries_db.json")
    
    # Gemini Configuration
    GEMINI_MODEL = "gemini-2.0-flash-exp"
    GEMINI_FALLBACK_MODEL = "gemini-1.5-flash"
    TEMPERATURE = 0.3
    TOP_P = 0.95
    TOP_K = 64
    MAX_OUTPUT_TOKENS = 8192
    
    # Request Limits
    MAX_TEXT_SIZE = 1000000  # 1MB


class DevelopmentConfig(Config):
    """Development configuration."""
    DEBUG = True


class ProductionConfig(Config):
    """Production configuration."""
    DEBUG = False


# Default config
config = Config()
