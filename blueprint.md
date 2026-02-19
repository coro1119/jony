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
*   **Home Hub (`index.html`):** A central landing page introducing all spiritual tools.
*   **Lucky Numbers (`lotto.html`):** Advanced lottery engine supporting both **Lotto 6/45** (with bonus numbers) and **Pension Lottery 720+** (Group + 6 digits). Supports multi-line generation (up to 5 lines) with a refined, professional design.
*   **Daily Saju (`fortune.html`):** Professional personalized daily fortune based on birth details, featuring traditional Four Pillars (Ganji) calculations and Manse-ryeok principles.
*   **New Year 2026 (`newyear.html`):** Detailed yearly Saju-based outlook for the year of the Red Horse.
*   **Zodiac Fortune (`zodiac.html`):** Daily guidance based on the Chinese Animal Zodiac.
*   **Horoscope (`horoscope.html`):** Daily energy reading based on Western Astrological signs.
*   **Fortune Cookie (`cookie.html`):** Interactive 3D-like cookie cracking experience.
*   **Tarot Reading (`tarot.html`):** An advanced 3-card spread (Past, Present, Future) using the **Major Arcana** cards. Includes a comprehensive summary interpretation after all cards are revealed.
*   **Contact & Community:** Integrated Formspree contact form and Disqus comment system on every tool page.

## Current Plan

**Request:** "보너스 번호까지 나오게 했으면 좋겠고 한번에 몇줄을 뽑을지 정할수있으면 좋겠다. 그리고 로또 추첨기의 전체적인 디자인도 자연스럽게 만들고" (Add bonus numbers, multi-line generation, and improve lotto design)

**Steps:**

1.  **Refactor `main.js`:**
    *   Update `LottoGenerator` to support multi-line output.
    *   Implement 6/45 bonus number and 720+ Group logic.
    *   Redesign the lottery UI with a cleaner, more intuitive tabbed interface.
2.  **Push to GitHub:** Commit and push the enhanced lottery features.
