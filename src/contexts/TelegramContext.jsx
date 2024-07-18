import { createContext, useContext, useEffect, useMemo, useState } from "react";

const initialSettings = {
  webApp: null,
  user: null,
};

export const TelegramContext = createContext(initialSettings);

const TelegramProvider = ({ children }) => {
  const [webApp, setWebApp] = useState(null);
  useEffect(() => {
    const app = window.Telegram?.WebApp;
    if (app) {
      app.ready();
      setWebApp(app);
    }
  }, []);

  const value = useMemo(() => {
    return webApp
      ? {
          webApp,
          unsafeData: webApp.initDataUnsafe,
          user: webApp.initDataUnsafe.user,
        }
      : {};
  }, [webApp]);

  return (
    <TelegramContext.Provider value={value}>
      {children}
    </TelegramContext.Provider>
  );
};

export default TelegramProvider;

export const useTelegram = () => useContext(TelegramContext);
