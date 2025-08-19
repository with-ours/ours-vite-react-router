# Ours Integration with Vite + React Router

Welcome to the **Ours Privacy + Vite + React Router** integration example! This repository demonstrates how to integrate **Ours Privacy** with a Vite + React Router application for tracking page views, custom events, and user interactions. Whether you're building for healthcare, or other privacy-focused industries, Ours Privacy provides a powerful solution that can help you achieve **HIPAA compliance** and ensures your users' data remains secure.

## Installation Methods

There are **two ways** to install and initialize Ours Privacy in your Vite + React Router application:

### Method 1: Script Tag Installation (Recommended for simple setups)

1. **Get your snippet from the Ours Privacy Admin Portal**
   - Log into your Ours Privacy dashboard
   - Navigate to the integration settings
   - Copy the provided JavaScript snippet

2. **Add the script tag to your HTML**
   - Open `index.html`
   - Uncomment the script tag in the `<head>` section
   - Paste your snippet from the Ours Privacy dashboard

```html
<!-- index.html -->
<head>
  <!-- Ours Pixel Code -->
  <script>
    // Paste your Ours Privacy initialization snippet here
    // Example:
    // window.ours = window.ours || function(){(window.ours.q=window.ours.q||[]).push(arguments)};
    // ours('init', 'YOUR_SITE_ID', {track_web_events: true});
  </script>
  <!-- End Ours Pixel Code -->
</head>
```

### Method 2: NPM Package Installation (Recommended for advanced setups)

1. **Install the Ours Privacy SDK**
   ```bash
   npm install ours-web-sdk
   ```

2. **Create an Analytics Provider**
   - Use the existing `src/providers/analytics-provider.tsx` component
   - This component initializes Ours Privacy when the app loads

```tsx
// src/providers/analytics-provider.tsx
import { useEffect } from "react";
import ours from "ours-web-sdk";

export function AnalyticsProvider() {
  useEffect(() => {
    // Initialize Ours Privacy on app load
    console.log("Init Ours here");
    ours.init('your_code_here', {track_web_events: true})
  }, []);

  return null; // No UI, just initialization
}
```

3. **Add the provider to your app**
   - The provider is already included in `src/App.tsx`
   - It automatically initializes Ours Privacy when the app loads

```tsx
// src/App.tsx
import { AnalyticsProvider } from "./providers/analytics-provider";

export const App: FC = memo(() => {
  return (
    <>
      <AnalyticsProvider />
      <RouterProvider router={router} />
    </>
  );
});
```

## Tracking Events

Once Ours Privacy is initialized, you can track custom events from any component:

### Using the TrackEventButton Component

This project includes a reusable `TrackEventButton` component that automatically tracks events with Ours Privacy:

```tsx
// src/components/TrackEventButton.tsx
import ours from 'ours-web-sdk';

export function TrackEventButton({ 
  eventName, 
  eventProperties = {}, 
  children, 
  className = '',
  onClick 
}: TrackEventButtonProps) {
  const handleClick = () => {
    // Track the event using Ours Privacy
    ours.track(eventName, eventProperties);
    
    // Call the optional onClick handler
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className={`btn btn-primary ${className}`}>
      {children}
    </button>
  );
}
```

### Using the Component in Pages

```tsx
// src/pages/index.tsx
import { TrackEventButton } from '../components/TrackEventButton';

export default function HomePage() {
  return (
    <div>
      <TrackEventButton 
        eventName="primary_action_clicked"
        eventProperties={{ location: 'homepage', button_type: 'primary' }}
        className="btn-full"
      >
        Get Started
      </TrackEventButton>
      
      <TrackEventButton 
        eventName="secondary_action_clicked"
        eventProperties={{ location: 'homepage', button_type: 'secondary' }}
        className="btn-secondary btn-full"
      >
        Learn More
      </TrackEventButton>
    </div>
  );
}
```

### Direct SDK Usage

You can also track events directly using the Ours Privacy SDK in any component:

```tsx
import ours from "ours-web-sdk";

function MyComponent() {
  const handleFormSubmit = () => {
    ours.track('form_submitted', {
      form_name: 'contact_form',
      user_type: 'new_user'
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* form content */}
    </form>
  );
}
```

### Key Points for Tracking:

- **Import the SDK**: Import `ours` from `"ours-web-sdk"` in any component that needs to track events
- **Event Names**: Use descriptive event names like `'button_click'`, `'form_submit'`, `'page_view'`, etc.
- **Event Properties**: Pass additional context as properties to enrich your analytics data
- **Automatic Page Views**: With `track_web_events: true`, page views are automatically tracked on route changes

## Configuration Options

Both installation methods support the same configuration options:

- `track_web_events`: Enable automatic tracking of page views and user interactions
- Custom event tracking with `ours.track(eventName, properties)`
- Privacy-focused data collection that respects user consent

---

## Getting Started

1. Choose your preferred installation method above
2. Replace `'your_code_here'` with your actual Ours Privacy site ID
3. Add tracking calls to your interactive components
4. Test your integration in the Ours Privacy dashboard

## Server-Side Tracking

For tracking events from server actions, API routes, or other server-side code, use the **Ours Privacy Server SDK**. This allows you to track events directly from your backend without requiring client-side JavaScript.

Visit the [Ours Privacy Track Events API documentation](https://docs.oursprivacy.com/reference/track) for complete server-side integration details, including:

- API endpoint: `POST https://api.oursprivacy.com/api/v1/track`
- Required parameters: Include at least one of `userId`, `externalId`, or `email`
- Supported languages: Node.js, Ruby, PHP, Python, and Shell examples
- Authentication and configuration options

For more detailed documentation, visit the [Ours Privacy documentation](https://docs.ours.com).
