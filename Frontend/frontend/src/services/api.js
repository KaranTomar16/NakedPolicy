/**
 * API client for NakedPolicy backend
 */

const API_BASE_URL = 'http://localhost:5000';

/**
 * Summarize policy text using the backend API
 * @param {string} text - The policy text to summarize
 * @returns {Promise<{summary: string}>} The generated summary
 */
export async function summarizeText(text) {
    const response = await fetch(`${API_BASE_URL}/summarize`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text })
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
}

/**
 * Get a summary by ID
 * @param {string} summaryId - The summary ID
 * @returns {Promise<Object>} The summary data
 */
export async function getSummary(summaryId) {
    const response = await fetch(`${API_BASE_URL}/summary/${summaryId}`);
    
    if (!response.ok) {
        throw new Error('Summary not found');
    }
    
    return response.json();
}

/**
 * Health check
 * @returns {Promise<{status: string}>}
 */
export async function healthCheck() {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.json();
}
