"""AI-powered summarization service using Google Gemini."""
from google import genai
from google.genai import types
from config.config import config


# System instruction for the AI
SYSTEM_INSTRUCTION = """You are a Privacy Rights Advocate helping everyday people understand complex legal policies.

Your task: Transform legal jargon into PLAIN ENGLISH that a 12-year-old can understand.

Analyze the Terms of Service or Privacy Policy and create a simple, scannable list of what users REALLY need to know.

Use this EXACT format:

# What You Need to Know

## 🚫 CRITICAL ISSUES (Deal Breakers)
[List the most serious privacy violations or unfair terms]
🚫 [Simple statement in plain English]
🚫 [Simple statement in plain English]

## ⚠️ CONCERNING PRACTICES (Think Twice)
[List problematic but common practices]
⚠️ [Simple statement in plain English]
⚠️ [Simple statement in plain English]
⚠️ [Simple statement in plain English]

## ✅ GOOD THINGS (Your Rights)
[List user protections and rights]
✅ [Simple statement in plain English]
✅ [Simple statement in plain English]

## ℹ️ STANDARD STUFF (Normal for Most Services)
[List typical industry practices]
ℹ️ [Simple statement in plain English]
ℹ️ [Simple statement in plain English]

---

**RULES FOR WRITING:**
1. Use SIMPLE words - pretend you're explaining to a friend over coffee
2. NO legal jargon - say "they can read your messages" not "access to user communications"
3. Be SPECIFIC - say "Facebook tracks you on other websites" not "third-party tracking occurs"
4. Be DIRECT - say "Your deleted photos aren't really deleted" not "data retention policies apply"
5. Each point is ONE clear sentence
6. Focus on what ACTUALLY affects users' privacy and rights
7. Maximum 1000 words total

**EXAMPLES OF GOOD STATEMENTS:**
- 🚫 This service can read your private messages
- 🚫 Your data is stored even if you delete your account
- ⚠️ They track which websites you visit
- ⚠️ Your location is collected through GPS
- ⚠️ They can sell your data if the company is sold
- ✅ You can delete your account anytime
- ✅ You can opt out of targeted ads
- ℹ️ You must be 13 or older to use this service
- ℹ️ They use cookies to remember your login

**EXAMPLES OF BAD STATEMENTS (too technical):**
- ❌ "The service implements third-party tracking mechanisms"
- ❌ "Data retention policies may extend beyond account termination"
- ❌ "Geolocation data is processed for service optimization"

Write like you're WARNING A FRIEND, not writing a legal document.
"""


class SummarizerService:
    """Service for generating policy summaries using AI."""
    
    def __init__(self):
        """Initialize the summarizer with Gemini API."""
        self.client = genai.Client(api_key=config.API_KEY)
    
    def generate_summary(self, text_content: str) -> str:
        """
        Generate a summary of the policy text using Gemini API.
        
        Args:
            text_content: The policy text to summarize
            
        Returns:
            The generated summary text
            
        Raises:
            Exception: If summary generation fails
        """
        try:
            print("Generating summary with Gemini...")
            
            # Use the primary model
            response = self.client.models.generate_content(
                model=config.GEMINI_MODEL,
                contents=text_content,
                config=types.GenerateContentConfig(
                    temperature=config.TEMPERATURE,
                    top_p=config.TOP_P,
                    top_k=config.TOP_K,
                    max_output_tokens=config.MAX_OUTPUT_TOKENS,
                    system_instruction=SYSTEM_INSTRUCTION,
                )
            )
            
            return response.text
            
        except Exception as e:
            print(f"Error generating content: {e}")
            
            # Fallback to simpler model
            try:
                print("Trying fallback model...")
                response = self.client.models.generate_content(
                    model=config.GEMINI_FALLBACK_MODEL,
                    contents=text_content,
                    config=types.GenerateContentConfig(
                        temperature=config.TEMPERATURE,
                        max_output_tokens=config.MAX_OUTPUT_TOKENS,
                        system_instruction=SYSTEM_INSTRUCTION,
                    )
                )
                return response.text
                
            except Exception as e2:
                print(f"Fallback also failed: {e2}")
                raise e2


# Create a singleton instance
summarizer_service = SummarizerService()
