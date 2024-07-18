import { lazy } from "react";
// CUSTOM COMPONENTS
import { Dashboard } from "../pages/dashboard";
import Loadable from "./Loadable";

// ALL DASHBOARD PAGES
const Homepage = Loadable(lazy(() => import("pages/homepage")));

export const AppRoutes = [
  {
    path: "",
    element: <Homepage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
];
