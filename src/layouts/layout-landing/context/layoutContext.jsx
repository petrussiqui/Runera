import { useCallback, useEffect, useState, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { navigation } from "./navigation";

export const LayoutContext = createContext({});
export default function LayoutProvider({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [active, setActive] = useState(navigation[0].name);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const downMd = useMediaQuery((theme) => theme.breakpoints.down(1024));
  const handleCloseMobileSidebar = () => setShowMobileSideBar(false);

  const handleActiveMainMenu = (menuItem) => () => {
    navigate(menuItem.path);
    setActive(menuItem.name);
  };

  const activeRoute = useCallback(() => {
    navigation.forEach((menu) => {
      if (menu.path === pathname) {
        setActive(menu.name);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    activeRoute();
  }, [activeRoute]);

  return (
    <LayoutContext.Provider
      value={{
        active,
        downMd,
        showMobileSideBar,
        handleActiveMainMenu,
        handleCloseMobileSidebar,
      }}>
      {children}
    </LayoutContext.Provider>
  );
}
