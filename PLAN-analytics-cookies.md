# Plan: Analytics & Cookie Consent

## Overview
The goal is to integrate user tracking (**Google Analytics 4** and **PostHog**) while strictly adhering to GDPR/Privacy laws.
Tracking must be **disabled by default** and enabled only after the user explicitly accepts cookies via a **custom consent banner**.

## Answers to Your Questions
- **Where to see analytics?**
    - **Google Analytics 4:** You log in to [analytics.google.com](https://analytics.google.com).
    - **PostHog:** You log in to [us.posthog.com](https://us.posthog.com) (or your self-hosted instance).
- **Is it free?**
    - **GA4:** Yes, completely free for standard use.
    - **PostHog:** Has a very generous **Free Tier** (1M events/month free), which is enough for most new businesses.

## Project Type
- **Type:** WEB
- **Primary Agent:** `frontend-specialist`

## Success Criteria
1.  **Strict Privacy:** No cookies set and no requests sent to GA4/PostHog until "Accept" is clicked.
2.  **Consent UI:**
    - Desktop: Minimal floating toast (Likely bottom-left or bottom-right).
    - Mobile: Centered modal/banner for easier interaction.
3.  **Data Flow:**
    - User Accepts -> Initialize GA4 + PostHog -> Start Tracking.
    - User Declines -> Do nothing.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Analytics Libraries:**
    - `@next/third-parties/google` (Official Next.js GA4 wrapper)
    - `posthog-js` (Official PostHog library)
- **State Management:** `localStorage` (to remember consent) + React Context

## File Structure
- `storefront/src/modules/analytics/components/cookie-banner/index.tsx` (NEW)
- `storefront/src/modules/analytics/providers/posthog-provider.tsx` (NEW)
- `storefront/src/modules/analytics/providers/google-analytics.tsx` (NEW)
- `storefront/src/app/layout.tsx` (MODIFY)

## Task Breakdown

### 1. Create Cookie Consent Component
- **Agent:** `frontend-specialist`
- **Skill:** `frontend-design`
- **Output:** `CookieBanner` component.
- **Details:**
    - Layout: Floating card.
    - Mobile Responsive: Center-aligned on small screens.
    - Functionality: Buttons for "Accept All" and "Decline".
    - Logic: Check `localStorage.getItem("cookie_consent")`.

### 2. Setup PostHog Provider
- **Agent:** `frontend-specialist`
- **Skill:** `react-patterns`
- **Output:** `PostHogProvider`.
- **Details:**
    - Initialize PostHog client-side only.
    - **Critical:** Set `persistence: 'memory'` initially, switch to `localStorage/cookie` only after consent.
    - Or simpler: Don't init until consent is true (Consent Mode).

### 3. Setup Google Analytics Component
- **Agent:** `frontend-specialist`
- **Skill:** `nextjs-best-practices`
- **Output:** Google Analytics wrapper.
- **Details:**
    - Use `GoogleAnalytics` from `@next/third-parties`.
    - Wrap in a condition: `if (consentGranted) return <GoogleAnalytics />`.

### 4. Integration into Layout
- **Agent:** `orchestrator`
- **Input:** `storefront/src/app/layout.tsx`
- **Details:**
    - Add `CookieBanner` to root layout.
    - Add Analytics providers conditionally based on state triggered by the banner.

## Phase X: Verification Plan

### Manual Verification
1.  **Clean Visit:** fast clear browser cookies. Visit site.
    - Check Network Tab: Ensure **0 requests** to `google-analytics.com` or `posthog.com`.
2.  **Accept:** Click "Accept" on banner.
    - Check Network Tab: Verify requests generally fire immediately.
    - Verify Banner disappears.
3.  **Persistence:** Refresh page.
    - Banner should not reappear.
    - Analytics requests should fire automatically.
