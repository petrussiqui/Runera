import { lazy } from "react";
import { AppRoutes } from "./app";
import Loadable from "./Loadable";
import { PublicRoutes } from "./public";
import LayoutLanding from "../layouts/layout-landing";

// GLOBAL ERROR PAGE
const ErrorPage = Loadable(lazy(() => import("pages/404")));
// MOBILE APP

export const routes = () => {
  return [
    // INITIAL / INDEX PAGE
    {
      path: "/",
      element: <LayoutLanding />,
      children: [...AppRoutes],
    },
    // GLOBAL ERROR PAGE
    {
      path: "*",
      element: <ErrorPage />,
    },
    // PAGES ROUTES
    ...PublicRoutes,
  ];
};
