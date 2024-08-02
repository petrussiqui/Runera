import { lazy } from "react";
// CUSTOM COMPONENTS
import Loadable from "./Loadable";
import Ecosystem from "../pages/ecosystem";
import Node from "../pages/node";
import Airdrop from "../pages/airdrop";
import Referral from "../pages/referral";
import Testnet from "../pages/testnet";
import Bridge from "../pages/bridge";

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
        element: <Ecosystem />,
      },
      {
        path: "ai",
        element: <Ecosystem />,
      },
      {
        path: "game",
        element: <Ecosystem />,
      },
    ],
  },
  {
    path: "/node",
    element: <Node />,
    children: [
      {
        path: "overview",
        element: <Node />,
      },
      {
        path: "emble",
        element: <Node />,
      },
    ],
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
    path: "/bridge",
    element: <Bridge />,
  },
  {
    path: "/testnet",
    element: <Testnet />,
    children: [
      {
        path: "faucet",
        element: <Testnet />,
      },
      {
        path: "mint-nft",
        element: <Testnet />,
      },
    ],
  },
];
