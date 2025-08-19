import React from "react";
import { type RouteObject } from "react-router-dom";
import HomePage from "./pages/index";

export const routes: RouteObject[] = [
  {
    hydrateFallbackElement: <div />,
    element: <HomePage />,
    path: "*",
  },
];
