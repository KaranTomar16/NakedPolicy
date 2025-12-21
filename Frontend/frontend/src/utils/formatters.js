/**
 * Utility functions for formatting and parsing
 */

/**
 * Parse summary text into sections
 * @param {string} summaryText - The raw summary text
 * @returns {Object} Structured sections
 */
export function parseSummary(summaryText) {
    const sections = {
        critical: [],
        concerning: [],
        good: [],
        standard: []
    };

    const lines = summaryText.split('\n').filter(line => line.trim());
    
    lines.forEach(line => {
        if (line.includes('🚫')) {
            sections.critical.push(line.replace('🚫', '').trim());
        } else if (line.includes('⚠️')) {
            sections.concerning.push(line.replace('⚠️', '').trim());
        } else if (line.includes('✅')) {
            sections.good.push(line.replace('✅', '').trim());
        } else if (line.includes('ℹ️')) {
            sections.standard.push(line.replace('ℹ️', '').trim());
        }
    });

    return sections;
}

/**
 * Combine sections into display points
 * @param {Object} sections - Structured sections
 * @returns {Array<string>} Array of formatted points
 */
export function formatKeyPoints(sections) {
    return [
        ...sections.critical.map(p => `🚫 ${p}`),
        ...sections.concerning.map(p => `⚠️ ${p}`),
        ...sections.good.map(p => `✅ ${p}`),
        ...sections.standard.map(p => `ℹ️ ${p}`)
    ];
}

/**
 * Calculate risk level based on sections
 * @param {Object} sections - Structured sections
 * @returns {string} Risk level: 'low', 'medium', or 'high'
 */
export function calculateRiskLevel(sections) {
    if (sections.critical.length > 2) {
        return 'high';
    } else if (sections.critical.length > 0 || sections.concerning.length > 3) {
        return 'medium';
    }
    return 'low';
}
