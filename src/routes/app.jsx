import { lazy } from "react";
// CUSTOM COMPONENTS
import Loadable from "./Loadable";
import Ecosystem from "../pages/ecosystem";
import Node from "../pages/node";
import Airdrop from "../pages/airdrop";
import Referral from "../pages/referral";

// ALL DASHBOARD PAGES
const Homepage = Loadable(lazy(() => import("pages/homepage")));

export const AppRoutes = [
  {
    path: "",
    element: <Homepage />,
  },
  {
    path: "/ecosystem",
    element: <Ecosystem />,
    children: [
      {
        path: "bitcoin",
        element: <Node />,
      },
      {
        path: "ai",
        element: <Node />,
      },
      {
        path: "game",
        element: <Node />,
      },
    ],
  },
  {
    path: "/node",
    element: <Node />,
  },
  {
    path: "/airdrop",
    element: <Airdrop />,
  },
  {
    path: "/referral",
    element: <Referral />,
  },
  {
    path: "/docs",
    element: <Homepage />,
  },
  {
    path: "/testnet",
    element: <Homepage />,
  },
];
