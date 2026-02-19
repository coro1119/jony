# Project Blueprint

## Overview

A modern, framework-less web application that functions as a visually appealing "Lucky Hub" sanctuary. It features multiple spiritual and luck-based interactive tools in a focused, multi-page layout with automatic multi-language support.

## Project Outline

### Style & Design
*   **Layout:** Multi-page immersive experience with a shared navigation menu and responsive grid systems.
*   **Colors:** Premium dark aesthetic using HEX/RGBA for wide compatibility (especially with Disqus).
*   **Aesthetics:** Modern glassmorphism, subtle noise textures, and smooth OKLCH-based color transitions.
*   **Typography:** Expressive 'Inter' typography with bold headings and readable body text.

### Features & Pages
*   **Multi-Language Support (i18n):** Automatic detection of user language (English/Korean) with a comprehensive translation engine for all UI elements and content.
*   **Home Hub:** A central landing page (`index.html`) introducing all spiritual tools.
*   **Lucky Numbers (`lotto.html`):** Interactive lotto number generator with satisfying animations.
*   **Daily Insight (`fortune.html`):** Personal spiritual messages for the user's day.
*   **Fortune Cookie (`cookie.html`):** Interactive 3D-like cookie cracking experience.
*   **Tarot Reading (`tarot.html`):** An advanced 3-card spread (Past, Present, Future) using the **22 Major Arcana** cards from the Rider-Waite deck. Includes contextual interpretations for General, Love, and Career concerns.
*   **Contact & Community:** Integrated Formspree contact form and Disqus comment system on every tool page.

## Current Plan

**Request:** "방문자의 기본설정 언어에 맞게 보여지는 언어가 바뀌는 사이트 기능을 넣고싶네" (Add automatic language switching based on visitor's settings)

**Steps:**

1.  **Refactor `main.js`:**
    *   Implement a translation dictionary for English and Korean.
    *   Add language detection logic using `navigator.language`.
    *   Update all Web Components to use translated strings.
    *   Add a `translatePage()` helper to handle static HTML elements with `data-i18n`.
2.  **Update HTML Files:** Add `data-i18n` attributes to all static text in all pages.
3.  **Push to GitHub:** Commit and push the multi-language expansion.
