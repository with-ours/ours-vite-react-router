import React from "react";
import { type RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    hydrateFallbackElement: <div />,
    element: <div>Hello World</div>,
    path: "*",
  },
];
