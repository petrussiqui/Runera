import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import RTL from "components/rtl";
import { routes } from "./routes";
import { createCustomTheme } from "./theme";
import "./i18n";
import { AuthProvider } from "contexts/auth0Context";
import TelegramProvider, { useTelegram } from "contexts/TelegramContext";
import { Toaster } from "react-hot-toast";
import { connector } from "./connector";
import { useEffect } from "react";
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import useSettings from "./hooks/useSettings";
import useUserData from "./hooks/useUserData";
import ReactGA from "react-ga4";

// if (process.env.REACT_APP_IS_LOCAL !== "true") {
ReactGA.initialize("G-NQCE4W27NZ" || "DUMMY");
// }

export default function App() {
  const { settings } = useSettings();
  const { user, webApp } = useTelegram();
  const { userData } = useUserData();
  const theme = createCustomTheme(settings);
  const router = createBrowserRouter(routes());
  useEffect(() => {
    connector.restoreConnection();
  }, []);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <TonConnectUIProvider
          manifestUrl="https://tonetapp.co/tonconnect-manifest.json"
          uiPreferences={{ theme: THEME.DARK }}
          walletsListConfiguration={{
            includeWallets: [
              {
                appName: "safepalwallet",
                name: "SafePal",
                imageUrl:
                  "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
                tondns: "",
                aboutUrl: "https://www.safepal.com",
                universalLink: "https://link.safepal.io/ton-connect",
                deepLink: "safepal-tc://",
                jsBridgeKey: "safepalwallet",
                bridgeUrl: "https://ton-bridge.safepal.com/tonbridge/v1/bridge",
                platforms: ["ios", "android", "chrome", "firefox"],
              },
              {
                appName: "bitgetTonWallet",
                name: "Bitget Wallet",
                imageUrl:
                  "https://raw.githubusercontent.com/bitkeepwallet/download/main/logo/png/bitget%20wallet_logo_iOS.png",
                aboutUrl: "https://web3.bitget.com",
                deepLink: "bitkeep://",
                jsBridgeKey: "bitgetTonWallet",
                bridgeUrl: "https://bridge.tonapi.io/bridge",
                platforms: ["ios", "android", "chrome"],
                universalLink: "https://bkcode.vip/ton-connect",
              },
              {
                appName: "tonwallet",
                name: "TON Wallet",
                imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
                aboutUrl:
                  "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
                universalLink: "https://wallet.ton.org/ton-connect",
                jsBridgeKey: "tonwallet",
                bridgeUrl: "https://bridge.tonapi.io/bridge",
                platforms: ["chrome", "android"],
              },
              {
                appName: "nicegramWallet",
                name: "Nicegram Wallet",
                imageUrl: "https://static.nicegram.app/icon.png",
                aboutUrl: "https://nicegram.app",
                universalLink: "https://nicegram.app/tc",
                deepLink: "nicegram-tc://",
                jsBridgeKey: "nicegramWallet",
                bridgeUrl: "https://bridge.tonapi.io/bridge",
                platforms: ["ios", "android"],
              },
            ],
          }}
          actionsConfiguration={{
            twaReturnUrl: `https://tonetapp.co`,
          }}
        >
          <TelegramProvider>
            <AuthProvider>
              <RTL>
                <CssBaseline />
                <RouterProvider router={router} />
                <Toaster />
              </RTL>
            </AuthProvider>
          </TelegramProvider>
        </TonConnectUIProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
