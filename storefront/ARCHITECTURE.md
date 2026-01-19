# Architecture Review & Recommendations

## Executive Summary

The current architecture of the `storefront` application demonstrates a strong foundation, leveraging Next.js 15 features and a domain-driven modular structure. The separation of concerns between `app` (routing), `modules` (features), and `lib` (business logic/data) is well-executed, providing a scalable base for future growth.

However, as the application grows, strict enforcement of module boundaries and the introduction of a robust testing strategy will be critical. This document outlines the current state, identifies areas for improvement, and proposes a roadmap for architectural refinement.

## 1. Folder Structure & Next.js Conventions

### ✅ Strengths
*   **App Router Usage**: The application correctly utilizes the `app/` directory with advanced routing patterns like Route Groups (`(main)`, `(checkout)`) and Dynamic Routes (`[countryCode]`, `[lang]`).
*   **Nested Layouts**: `layout.tsx` files are used effectively to wrap route groups, preventing code duplication.
*   **Separation of Routing & logic**: The `app/` directory is primarily used for routing, metadata, and initial data fetching, delegating UI rendering to `modules/`. This keeps the routing layer clean.

### ⚠️ Areas for Improvement
*   **Deep Nesting**: Routes like `src/app/[countryCode]/[lang]/(main)/products/[handle]/page.tsx` are deeply nested. While necessary for the requirements, ensure that developer tooling (VS Code breadcrumbs, etc.) is optimized.
*   **Loading & Error States**: While `not-found.tsx` is present, ensure granular `loading.tsx` and `error.tsx` boundaries are implemented within route groups to prevent full-page crashes or blank screens during data fetching.

## 2. Modular Architecture & Separation of Concerns

### ✅ Strengths
*   **Feature Modules**: The `src/modules/` directory is the standout feature of this architecture. Grouping by domain (e.g., `cart`, `products`, `checkout`) rather than technical role (e.g., `components`, `hooks`) is excellent for scalability.
*   **Shared Logic**: `src/lib/` correctly houses cross-cutting concerns like data fetching (`lib/data`), utilities (`lib/util`), and hooks.
*   **Data Access Layer**: The `lib/data` directory acts as a clear abstraction layer for backend communication, preventing direct API calls in components.

### ⚠️ Leaky Abstractions & Suggestions
*   **Module Public API**: Currently, consumers import deep into modules (e.g., `import ProductTemplate from "@modules/products/templates"`).
    *   **Recommendation**: Implement "Barrel Files" (`index.ts`) at the root of each module (e.g., `src/modules/products/index.ts`). This file should export *only* the public API of the module.
    *   *Benefit*: Refactoring internals won't break consumers, and it makes dependencies explicit.
*   **Component Logic**: Ensure "dumb" UI components in `modules/*/components` stay pure. Complex logic should be lifted to `templates` or custom hooks.

## 3. Scalability & Developer Experience

### ✅ Strengths
*   **Colocation**: `components` and `templates` are colocated within their respective modules. This makes it easy to delete or move features.
*   **Naming Consistency**: Kebab-case for files and PascalCase for components is consistently applied.

### ⚠️ Missing Pieces
*   **Unit Testing**: There is a noticeable absence of unit tests (e.g., `*.test.tsx` or `*.spec.tsx`) colocated with components.
    *   **Recommendation**: Adopt a strategy where tests live next to the file they test (e.g., `product-preview.tsx` -> `product-preview.test.tsx`). This encourages writing tests and keeps them visible.
*   **Storybook / Documentation**: As the component library grows, consider adding Storybook to document the "Shared" components in `modules/common`.

## 4. Client vs. Server Components

*   **Current State**: The application makes good use of Server Components for data fetching (in `page.tsx`) and passes data down.
*   **Verification**: Ensure that "Interactive" components (using `useState`, `useEffect`) are explicitly marked with `'use client'`.
*   **Optimization**: Watch out for "Client Component Waterfalls". If a Client Component imports a heavy library, ensure it doesn't block the main thread.

## 5. Restructuring Plan

To move towards a "Senior Solutions Architect" approved structure, I recommend the following refinements:

### Phase 1: Harden Module Boundaries
Create `index.ts` files for each module.

```typescript
// src/modules/products/index.ts
export { default as ProductTemplate } from './templates';
export { default as ProductPreview } from './components/product-preview';
// Do NOT export internal sub-components unless necessary
```

### Phase 2: Testing Infrastructure
Install `vitest` and `testing-library/react`. Start adding unit tests for critical logic in `lib/util` and shared UI components in `modules/common`.

### Phase 3: Type Colocation
Move module-specific types from `@medusajs/types` (if customizable) or local interfaces into the module itself (e.g., `src/modules/products/types.ts`), exported via the barrel file.

### Folder Structure Legend

*   **`src/app`**: **Router & Composition**. Connects URLs to Modules. Fetches data.
*   **`src/modules`**: **Features**. Self-contained domains.
    *   `src/modules/common`: **Shared UI**. Buttons, Inputs, Layouts.
*   **`src/lib`**: **Core Logic**. Data fetching, utilities, configs. agnostic of UI.
