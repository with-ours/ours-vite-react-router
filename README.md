# Ours Privacy + Vite + React Router Demo

This repo is a working reference for integrating the [Ours Privacy](https://docs.oursprivacy.com/) **CDP** (Customer Data Platform) and **CMP** (Consent Management Platform) into a client-side React application using Vite and React Router. Browse the code to see how each product is installed, initialized, and used.

## What This Repo Demonstrates

### [`/`](src/pages/index.tsx) — CDP via CDN (recommended)

Shows how to install the CDP with a single script tag in `index.html` — no package manager or build step required. The script creates a global `ours()` function that queues calls until the SDK loads, so you can call `ours('track', ...)` immediately without waiting for a load event. **This is the recommended approach for most sites.**

### [`/cmp`](src/pages/cmp.tsx) — Consent Management Platform

Shows the CMP on its own. It provides HIPAA-ready consent collection with auditor-grade receipts, regional policies, and a pre-styled banner loaded directly from the Ours Privacy CDN. Includes interactive controls for showing/hiding the banner and a live view of current consent state.

### [`/integration`](src/pages/integration.tsx) — CMP + CDP Together

Shows how the CMP and CDP work together. The CMP automatically gates tracking based on user consent — when analytics consent is rejected, CDP events are blocked at the network level. Includes code examples showing the correct script ordering.

## Why `index.html`?

In a client-side React SPA, `index.html` is the single entry point for every route. It is the right place to load analytics and consent scripts because:

- **It runs once** — the HTML loads when the visitor first arrives. Scripts initialize once and persist across client-side route navigations.
- **It covers every page** — every route the React Router renders inherits whatever is in `index.html`, with no extra configuration.
- **Load order is deterministic** — scripts in `<head>` execute in document order, so placing the CMP before the CDP guarantees consent is available before tracking starts.

### How the scripts are ordered in [`index.html`](index.html)

```html
<head>
  <!-- 1. CMP loads first (synchronous) -->
  <link rel="stylesheet"
    href="https://cdn.oursprivacy.com/consent.css" />
  <script
    src="https://cdn.oursprivacy.com/cmp-init?token=YOUR_CMP_TOKEN">
  </script>

  <!-- 2. CDP loads second -->
  <script>
    // Your Ours Pixel Code snippet here
    ours('init', 'YOUR_CDP_TOKEN', {
      track_web_events: true
    });
  </script>
</head>
```

Because the CMP script appears first, it initializes before the CDP. Consent is already available when the CDP boots, so the CMP can gate tracking from the very first page load.

## SPA vs. SSR (Next.js)

In server-rendered frameworks like Next.js, the CMP needs special handling (`afterInteractive`) to avoid colliding with React hydration. That introduces a window where scripts can execute before the CMP is ready, requiring manual blocking for anything in the initial HTML.

**Client-side SPAs don't have this problem.** There is no server-rendered HTML to hydrate, so you can load the CMP synchronously in `<head>` and it will be ready before React even mounts. This means:

- Automatic blocking works from the start — no timing race
- No need for `afterInteractive` or framework-specific script loaders
- No manual blocking required for scripts that appear after the CMP in `index.html`

If your page does include third-party scripts that load independently (e.g., a tag manager that fires before the CMP), the same manual blocking guidance from the [React and Next.js docs](https://docs.oursprivacy.com/docs/cookie-consent/react-and-nextjs) still applies.

## CDP via NPM (Alternative)

If you prefer a package import over a script tag, install the SDK:

```bash
npm install ours-web-sdk
```

Then initialize in a provider component:

```tsx
// src/providers/analytics-provider.tsx
import ours from "ours-web-sdk";
import { useEffect } from "react";

export function AnalyticsProvider() {
  useEffect(() => {
    ours.init('YOUR_CDP_TOKEN', { track_web_events: true });
  }, []);

  return null;
}
```

And render it at the top of your app:

```tsx
// src/App.tsx
import { AnalyticsProvider } from "./providers/analytics-provider";

export function App() {
  return (
    <>
      <AnalyticsProvider />
      <RouterProvider router={router} />
    </>
  );
}
```

Track events from any component:

```tsx
import ours from "ours-web-sdk";

ours.track('button_click', { location: 'homepage' });
```

## Getting Started

```bash
npm install
npm run dev
```

## Docs

- [Ours Privacy Docs](https://docs.oursprivacy.com/)
- [Cookie Consent](https://docs.oursprivacy.com/docs/cookie-consent)
- [React and Next.js CMP Guide](https://docs.oursprivacy.com/docs/cookie-consent/react-and-nextjs)
- [Script Blocking](https://docs.oursprivacy.com/docs/cookie-consent/script-blocking)
- [JavaScript SDK (Consent)](https://docs.oursprivacy.com/docs/cookie-consent/javascript-sdk)
- [Web SDK (CDP)](https://docs.oursprivacy.com/docs/web-sdk-javascript)
