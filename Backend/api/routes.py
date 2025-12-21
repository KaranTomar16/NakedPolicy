"""Flask API routes for NakedPolicy backend."""
from flask import request, jsonify
from services.summarizer import summarizer_service
from config.config import config


def register_routes(app):
    """Register all API routes with the Flask app."""
    
    @app.route('/summarize', methods=['POST'])
    def summarize():
        """
        Endpoint to summarize policy text.
        
        Expected JSON body:
        {
            "text": "policy text content..."
        }
        
        Returns:
        {
            "summary": "generated summary..."
        }
        """
        try:
            data = request.get_json()
            if not data or 'text' not in data:
                return jsonify({"error": "No text provided"}), 400

            text_content = data['text']
            
            # Basic file size check
            if len(text_content) > config.MAX_TEXT_SIZE:
                return jsonify({"error": "Text content too large (max 1MB)"}), 413

            summary_text = summarizer_service.generate_summary(text_content)
            return jsonify({"summary": summary_text})

        except Exception as e:
            print(f"Error: {e}")
            return jsonify({"error": str(e)}), 500
    
    @app.route('/health', methods=['GET'])
    def health():
        """Health check endpoint."""
        return jsonify({"status": "ok"}), 200
