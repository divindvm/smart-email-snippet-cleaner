// index.js - Smart Email Snippet Cleaner for Security-related emails

/**
 * Clean raw email snippets by removing common phishing or security-related content.
 * @param {string} snippet - Raw email snippet (HTML or text)
 * @returns {string} - Cleaned email snippet
 */
export function cleanSecuritySnippet(snippet) {
  // Define suspicious keywords or patterns related to phishing or security threats
  const suspiciousPatterns = [
    /login\.[a-z0-9\-]+\.[a-z]{2,3}/i, // login.* domain
    /verify.*account/i,                 // verify account
    /urgent/i,                          // urgent
    /immediately/i,                     // immediate action
    /suspicious/i,                      // suspicious
    /security/i,                        // security
    /click here/i,                      // click here
    /please respond/i                   // please respond
  ];

  // Check for the presence of any suspicious patterns
  const containsSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(snippet));

  if (containsSuspiciousContent) {
    return "This email contains security-related content and may be suspicious.";
  }

  // If no suspicious content, clean the snippet by removing HTML and extra spaces
  return snippet
    .replace(/(\r\n|\n|\r)/gm, " ")  // Remove newlines
    .replace(/<[^>]*>/g, "")         // Remove HTML tags
    .replace(/&nbsp;/g, " ")         // Convert HTML entities
    .replace(/&amp;/g, "&")         // Convert HTML entities
    .trim();                        // Trim surrounding spaces
}
