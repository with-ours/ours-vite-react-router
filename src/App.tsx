import { memo } from "react";
import type { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AnalyticsProvider } from "./providers/analytics-provider";
import { routes } from "./routes";

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
