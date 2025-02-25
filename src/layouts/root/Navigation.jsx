import { Fragment, useEffect, useState } from "react";
// MUI
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItemButton from "@mui/material/ListItemButton";
import styled from "@mui/material/styles/styled";
// MUI ICON COMPONENT
import Menu from "@mui/icons-material/Menu";
// CUSTOM DEFINED HOOK
import useLocation from "hooks/useLocation";
// CUSTOM COMPONENTS
import Link from "components/link";
import Scrollbar from "components/scrollbar";
import MegaMenu from "./menu/MegaMenu";
import MegaMenuList from "./menu/MegaMenuList";
// CUSTOM ICON COMPONENT
import ChevronDown from "icons/ChevronDown";
// NAVIGATION LIST
import { PAGES_MENUS } from "./menu/navigation";
import { TonConnectButton } from "@tonconnect/ui-react";

// STYLED COMPONENT
const StyledRoot = styled("header")(({ theme }) => ({
  paddingBlock: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
const StyledNav = styled("nav")(({ theme }) => ({
  display: "flex",
  fontSize: 14,
  fontWeight: 500,
  listStyle: "none",
  alignItems: "center",
  gap: theme.spacing(5),
}));
const StyledNavItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isDark" && prop !== "isActive",
})(({ theme, isDark, isActive }) => ({
  color: "white",
  transition: "color 300ms",
  ":hover": {
    color: theme.palette.primary.main,
  },
  ...(isDark && {
    color: theme.palette.text.primary,
  }),
  ...(isActive && {
    color: theme.palette.primary.main,
  }),
}));
export default function Navigation() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const isMedium = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isActive = (path) => pathname === path;
  const isComponentsRoute = pathname.startsWith("/components");
  useEffect(() => {
    if (isMedium) setOpen(false);
  }, [isMedium]);

  // FOR LARGE SCREEN DEVICE
  const LARGE_DEVICE_CONTENT = (
    <StyledNav>
      <StyledNavItem
        href="/"
        isActive={isActive("/")}
        isDark={isComponentsRoute}
      >
        Home
      </StyledNavItem>

      <StyledNavItem
        href="#about"
        isDark={isComponentsRoute}
        isActive={isActive("#about")}
      >
        About
      </StyledNavItem>
      <StyledNavItem
        href="#tokenomics"
        isDark={isComponentsRoute}
        isActive={isActive("#tokenomics")}
      >
        Tokenomics
      </StyledNavItem>
      <StyledNavItem
        href="#how-to-buy"
        isDark={isComponentsRoute}
        isActive={isActive("#how-to-buy")}
      >
        How To Buy
      </StyledNavItem>
      <StyledNavItem
        href="#roadmap"
        isDark={isComponentsRoute}
        isActive={isActive("#roadmap")}
      >
        Roadmap
      </StyledNavItem>
      <StyledNavItem
        href="#components"
        isDark={isComponentsRoute}
        isActive={isActive("#referral")}
      >
        Referral
      </StyledNavItem>

      <StyledNavItem
        href="http://uko-doc.vercel.app/"
        isDark={isComponentsRoute}
      >
        Documentation
      </StyledNavItem>

      <TonConnectButton></TonConnectButton>
    </StyledNav>
  );

  // FOR SMALL AND MEDIUM SCREEN DEVICE
  const SMALL_DEVICE_CONTENT = (
    <Fragment>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Scrollbar>
          <List
            disablePadding
            sx={{
              minWidth: 260,
              height: "100%",
            }}
          >
            <ListItem
              sx={{
                mb: 1,
              }}
            >
              <img
                src="/static/logo/logo-svg.svg"
                alt="logo"
                width={40}
                height={40}
              />
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="/">
                Home
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="#about">
                About
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="#token">
                Tokenomics
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="#how">
                How To Buy
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="#roadmap">
                Roadmap
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="#ref">
                Referral
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="#doc">
                Documentation
              </ListItemButton>
            </ListItem>

            <ListItem
              sx={{
                mt: 1,
              }}
            >
              <Button fullWidth>Connect Wallet</Button>
            </ListItem>
          </List>
        </Scrollbar>
      </Drawer>

      <IconButton
        color="primary"
        onClick={() => setOpen(true)}
        sx={{
          flexShrink: 0,
        }}
      >
        <Menu />
      </IconButton>
    </Fragment>
  );
  return (
    <StyledRoot>
      {/* UKO LOGO */}
      <Link href="/">
        <img
          src="/static/logo/logo-svg.svg"
          alt="logo"
          width={35}
          height={35}
        />
      </Link>

      {isMedium ? LARGE_DEVICE_CONTENT : SMALL_DEVICE_CONTENT}
    </StyledRoot>
  );
}
