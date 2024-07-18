import { lazy } from "react";
// CUSTOM COMPONENTS
import Loadable from "./Loadable";

const Permission = Loadable(lazy(() => import("pages/permission")));
const ComingSoon = Loadable(lazy(() => import("pages/coming-soon")));
const Maintenance = Loadable(lazy(() => import("pages/maintenance")));

export const PublicRoutes = [
  {
    path: "permission",
    element: <Permission />,
  },
  {
    path: "maintenance",
    element: <Maintenance />,
  },
  {
    path: "coming-soon",
    element: <ComingSoon />,
  },
];
