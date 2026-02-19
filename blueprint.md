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
*   **Tarot Reading (`tarot.html`):** An upgraded 3-card spread (Past, Present, Future) for deep insight.
*   **Contact & Community:** Integrated Formspree contact form and Disqus comment system on every tool page.

## Current Plan

**Request:** "각 기능들마다 페이지를 따로 만들어서 더 집중력 있게 하면 좋을거같아. 그리고 타로는 tarotAI 이거를 참고해서 전체적으로 업그레이드 시켜줘" (Create separate pages for focus and upgrade Tarot based on tarotAI)

**Steps:**

1.  **Update `style.css`:** Implement navigation and hub layout styles.
2.  **Refactor `main.js`:** Upgrade `TarotReader` to a 3-card spread and optimize all components for standalone use.
3.  **Create Multi-Page Structure:**
    *   Create `index.html` (Hub)
    *   Create `lotto.html`, `fortune.html`, `cookie.html`, `tarot.html` (Standalone tool pages)
4.  **Push to GitHub:** Commit and push the multi-page expansion.
