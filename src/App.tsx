import React, { memo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import type { FC } from "react";
import { routes } from "./routes";
import { AnalyticsProvider } from "./providers/analytics-provider";

export const router = createBrowserRouter(routes);

export const App: FC = memo(() => {
  return (
    <>
      <AnalyticsProvider />
      <RouterProvider router={router} />
    </>
  );
});
App.displayName = "App";
