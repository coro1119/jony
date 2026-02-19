# Project Blueprint

## Overview

A modern, framework-less web application that functions as a visually appealing "Lucky Hub" sanctuary. It features multiple spiritual and luck-based interactive tools in a focused, multi-page layout.

## Project Outline

### Style & Design
*   **Layout:** Multi-page immersive experience with a shared navigation menu and responsive grid systems.
*   **Colors:** Premium dark aesthetic using HEX/RGBA for wide compatibility (especially with Disqus).
*   **Aesthetics:** Modern glassmorphism, subtle noise textures, and smooth OKLCH-based color transitions.
*   **Typography:** Expressive 'Inter' typography with bold headings and readable body text.

### Features & Pages
*   **Home Hub:** A central landing page (`index.html`) introducing all spiritual tools.
*   **Lucky Numbers (`lotto.html`):** Interactive lotto number generator with satisfying animations.
*   **Daily Insight (`fortune.html`):** Personal spiritual messages for the user's day.
*   **Fortune Cookie (`cookie.html`):** Interactive 3D-like cookie cracking experience.
*   **Tarot Reading (`tarot.html`):** An advanced 3-card spread (Past, Present, Future) using the **22 Major Arcana** cards from the Rider-Waite deck. Includes contextual interpretations for General, Love, and Career concerns.
*   **Contact & Community:** Integrated Formspree contact form and Disqus comment system on every tool page.

## Current Plan

**Request:** "타로 카드를 ... 사실적으로 만들면 어떨까? 그리고 해설이 있어야대. 질문자의 상황에 맞게..." (Make Tarot realistic with Rider-Waite cards and contextual explanations)

**Steps:**

1.  **Refactor `TarotReader` in `main.js`:**
    *   Implement full `Major Arcana` dataset with high-quality Wikimedia Commons images.
    *   Add specific interpretations for `General`, `Love`, and `Career` contexts.
    *   Enhance UI with a "Concern Selector" and realistic card flip animations using 3D transforms.
2.  **Push to GitHub:** Commit and push the realistic Tarot upgrade.
