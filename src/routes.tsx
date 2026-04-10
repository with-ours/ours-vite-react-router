import type { RouteObject } from "react-router-dom";
import { Layout } from "./components/Layout";
import AboutPage from "./pages/about";
import CmpPage from "./pages/cmp";
import HomePage from "./pages/index";
import IntegrationPage from "./pages/integration";

export const routes: RouteObject[] = [
	{
		element: <Layout />,
		children: [
			{
				hydrateFallbackElement: <div />,
				element: <HomePage />,
				path: "/",
			},
			{
				hydrateFallbackElement: <div />,
				element: <AboutPage />,
				path: "/about",
			},
			{
				hydrateFallbackElement: <div />,
				element: <CmpPage />,
				path: "/cmp",
			},
			{
				hydrateFallbackElement: <div />,
				element: <IntegrationPage />,
				path: "/integration",
			},
			{
				hydrateFallbackElement: <div />,
				element: <HomePage />,
				path: "*",
			},
		],
	},
];
