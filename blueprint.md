# Project Blueprint

## Overview

A modern, framework-less web application that functions as a visually appealing Lotto Number Generator.

## Project Outline

### Style & Design
*   **Layout:** Responsive and centered layout.
*   **Colors:** Vibrant color palette using modern color spaces (`oklch`).
*   **Typography:** Clear and bold typography.
*   **Effects:** Interactive button with a glow effect, and styled number display.
*   **Themes:** Support for both Dark and Light modes with persistent storage.

### Features
*   **Web Components:** Reusable `<lotto-generator>`, `<contact-form>`, and `<disqus-comments>` components.
*   **ES Modules:** Organized and maintainable JavaScript.
*   **Lotto Number Generation:** Generates 6 unique random numbers.
*   **Theme Switcher:** Toggle between light and dark themes.
*   **Contact Form:** Integration with Formspree for handling messages.
*   **Comments:** Integration with Disqus for user engagement.

## Current Plan

**Request:** "discus 로 댓글기능 만들고 싶어." (I want to add comment functionality with Disqus)

**Steps:**

1.  **Update `main.js`:** Create the `DisqusComments` web component with Disqus embed script.
2.  **Update `index.html`:** Add the `<disqus-comments>` component.
3.  **Update `blueprint.md`:** Document the new Disqus comments feature.
4.  **Push to GitHub:** Commit and push the changes.
