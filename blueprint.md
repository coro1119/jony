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
*   **Web Components:** A reusable `<lotto-generator>` component.
*   **ES Modules:** Organized and maintainable JavaScript.
*   **Lotto Number Generation:** Generates 6 unique random numbers.
*   **Theme Switcher:** Toggle between light and dark themes.

## Current Plan

**Request:** "다크모드 화이트모드 추가해서 git push로 배포까지 해줘" (Add dark/light mode and push to git for deployment)

**Steps:**

1.  **Update `style.css`:** Define light mode color overrides using `[data-theme="light"]`.
2.  **Update `main.js`:** Add theme toggle button to the `LottoGenerator` component and implement theme switching logic with `localStorage`.
3.  **Update `blueprint.md`:** Document the new theme features.
4.  **Push to GitHub:** Commit and push the changes to the remote repository.
