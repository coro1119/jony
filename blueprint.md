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
*   **Lucky Numbers (`lotto.html`):** Interactive lotto number generator with satisfying animations.
*   **Daily Saju (`fortune.html`):** Traditional personalized daily fortune based on birth details (Date, traditional 2-hour Time blocks, Gender).
*   **New Year 2026 (`newyear.html`):** Detailed yearly Saju-based outlook for the year of the Red Horse.
*   **Zodiac Fortune (`zodiac.html`):** Daily guidance based on the Chinese Animal Zodiac.
*   **Horoscope (`horoscope.html`):** Daily energy reading based on Western Astrological signs.
*   **Fortune Cookie (`cookie.html`):** Interactive 3D-like cookie cracking experience.
*   **Tarot Reading (`tarot.html`):** An advanced 3-card spread (Past, Present, Future) using the **22 Major Arcana** cards from the Rider-Waite deck. Includes contextual interpretations for General, Love, and Career concerns.
*   **Contact & Community:** Integrated Formspree contact form and Disqus comment system on every tool page.

## Current Plan

**Request:** "신년운세, 띠별운세, 별자리운세 파트들도 새로 만들어주렴... 태어난시간 부분... 23:30-01:29 부터 시작이거든." (Add New Year, Zodiac, Horoscope features and correct Saju time logic)

**Steps:**

1.  **Refactor `main.js`:**
    *   Implement `NewYearFortune`, `ZodiacFortune`, and `HoroscopeFortune` components.
    *   Correct Saju birth time options to use traditional 2-hour blocks starting from 23:30 (Jasi).
    *   Expand translation dictionary for new features.
2.  **Create/Update HTML Files:**
    *   Create `newyear.html`, `zodiac.html`, `horoscope.html`.
    *   Update navigation menu in all pages to include the new features.
3.  **Push to GitHub:** Commit and push the massive expansion.
