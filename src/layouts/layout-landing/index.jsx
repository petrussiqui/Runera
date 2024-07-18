import { Outlet, useSearchParams } from "react-router-dom";
import LayoutBodyWrapper from "./components/LayoutBodyWrapper";
import { useEffect } from "react";
import useSettings from "../../hooks/useSettings";
import LayoutProvider from "./context/layoutContext";

export default function LayoutLanding({ children }) {
  const { settings, saveSettings } = useSettings();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const temp = searchParams.get("token");
    if (settings?.token !== temp && !!temp && temp?.length > 0) {
      saveSettings({ ...settings, token: temp });
    }
  }, [settings]);

  return (
    <LayoutProvider>
      <LayoutBodyWrapper>{children || <Outlet />}</LayoutBodyWrapper>
    </LayoutProvider>
  );
}
