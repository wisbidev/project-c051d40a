# Software Requirements Specification — aiteam Landing Page

## 1. Overview

A single-page landing page for **aiteam** — an AI platform that automatically builds software via Telegram. The page introduces the product, explains how it works, presents the four AI agents (PM, TL, Dev, TestLead), highlights key features, lists the tech stack, provides a final call-to-action, and includes a footer.

- **Theme**: Dark mode
- **Framework**: Next.js + Tailwind CSS
- **Design style**: Modern, minimal SaaS — responsive mobile-first
- **Accent color**: Blue (#3B82F6)
- **Language**: Vietnamese (Tiếng Việt)

## 2. Functional Requirements

### 2.1 Hero Section

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| F1.1 | Display headline "AI Team. Không cần thuê dev." | Text is centered, large bold font, responsive sizing |
| F1.2 | Display subheadline (1–2 sentences explaining the platform) | Below headline, muted text color, max-width constrained |
| F1.3 | Two CTA buttons: "Bắt đầu ngay" (primary) and "Xem cách hoạt động" (secondary) | Primary: filled blue (#3B82F6) bg. Secondary: outlined. Both have hover states |
| F1.4 | Background: dark with blue gradient and subtle glow effect | Linear gradient from dark to blue-tinted, CSS glow behind headline |
| F1.5 | Mobile responsive | Stacks vertically on mobile, full-width, touch-friendly button sizes |

### 2.2 Pipeline / How It Works Section

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| F2.1 | Section headline: "Từ ý tưởng đến deploy hoàn toàn tự động" | Visible at section top, centered |
| F2.2 | Display 5 steps in a timeline / step-card layout | Steps rendered horizontally on desktop, stacked on mobile |
| F2.3 | Each step contains: icon, title, short description | All three elements present per card |
| F2.4 | Subtle entrance animation on scroll | Cards fade/slide in when scrolled into view (CSS or Framer Motion) |
| F2.5 | Connector line or arrow between steps | Visual connector between step cards on desktop view |

### 2.3 AI Agents Section

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| F3.1 | 4 agent cards: PM, TL, Dev, TestLead | One card per agent, equally sized |
| F3.2 | Each card has: agent name, list of responsibilities, icon | All elements present |
| F3.3 | Dark card style with light border | Border color subtle gray/white, ~1px |
| F3.4 | Hover effect: blue glow on card | Glow shadow or border color change to blue on hover |
| F3.5 | Grid layout responsive | 4 columns desktop → 2 columns tablet → 1 column mobile |

### 2.4 Features Section

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| F4.1 | Section headline for features | Centered heading |
| F4.2 | 6 feature cards in grid | 3×2 grid desktop → 2×3 tablet → 1 column mobile |
| F4.3 | Features: giao tiếp Telegram, không cần team dev, auto GitHub repo, estimate cost/time, auto deploy, realtime tracking | Each card has outline-style icon + title + short description |
| F4.4 | Consistent card styling | Same height, padding, dark bg |

### 2.5 Tech Stack Section

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| F5.1 | Section headline for tech stack | Centered heading |
| F5.2 | 6 technology items: Next.js, Go, PostgreSQL, Tailwind CSS, GitHub Actions, Docker | Each shows logo/icon + technology name |
| F5.3 | Responsive grid | Adjusts columns based on viewport width |

### 2.6 Final CTA Section

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| F6.1 | Headline: "Bắt đầu build sản phẩm với AI team" | Large centered text |
| F6.2 | Subheadline (supporting text) | Below headline, muted |
| F6.3 | CTA button: "Chat qua Telegram" | Prominent button, possibly with Telegram icon |
| F6.4 | Subtle background effect (gradient, glow, or particle) | Visual enhancement behind the CTA area |

### 2.7 Footer Section

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| F7.1 | Logo "aiteam" | Left-aligned or centered |
| F7.2 | Telegram link | Clickable icon/link |
| F7.3 | GitHub link | Clickable icon/link |
| F7.4 | Copyright text | Small text, muted color |
| F7.5 | Responsive layout | Stacks on mobile, inline on desktop |

## 3. Non-Functional Requirements

- **Performance**: Lighthouse scores ≥ 90 for Performance, Accessibility, Best Practices
- **SEO**: meta tags for title, description, Open Graph
- **Accessibility**: semantic HTML, ARIA labels on interactive elements, keyboard navigable
- **Cross-browser**: works on latest Chrome, Firefox, Safari, Edge
- **Responsive**: mobile-first breakpoints at 640px, 768px, 1024px, 1280px

## 4. Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework (App Router) |
| Tailwind CSS | Utility-first styling |
| TypeScript | Type safety |
| Framer Motion (optional) | Scroll animations |

## 5. Design

Design: see attached spec — detailed wireframes and visual mockups were produced during the design phase covering all 7 sections, color palette (dark bg #0a0a0f, accent #3B82F6), typography (Inter or system sans-serif), and responsive breakpoints.
