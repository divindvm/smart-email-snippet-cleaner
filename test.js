import { cleanSecuritySnippet } from 'smart-email-snippet-cleaner';

const emailSnippet = `
  <html>
    <body>
      <h1>URGENT: Verify your account!</h1>
      <p>Click here to <a href="http://example.com/login">login</a>.</p>
    </body>
  </html>
`;

const cleanedSnippet = cleanSecuritySnippet(emailSnippet);
console.log(cleanedSnippet);  // Output: "This email contains security-related content and may be suspicious."
