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
// MUI ICON COMPONENT
import Menu from "@mui/icons-material/Menu";
// CUSTOM DEFINED HOOK
import useLocation from "hooks/useLocation";
// CUSTOM COMPONENTS
import Link from "components/link";
import MegaMenu from "./menu/MegaMenu";
import MegaMenuList from "./menu/MegaMenuList";
import Scrollbar from "components/scrollbar";
import { Paragraph } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox";
// CUSTOM ICON COMPONENT
import ChevronDown from "icons/ChevronDown";
// NAVIGATION LIST
import { PAGES_MENUS } from "./menu/navigation";

// COMMON STYLE OBJECT
const LIST_STYLE = {
  gap: 5,
  fontSize: 14,
  fontWeight: 500,
  listStyle: "none",
  alignItems: "center",
  a: {
    transition: "color 300ms",
    ":hover": {
      color: "primary.main",
    },
  },
};
export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const isMedium = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isActive = (path) => pathname === path;
  useEffect(() => {
    if (isMedium) setOpen(false);
  }, [isMedium]);

  // FOR LARGE SCREEN DEVICE
  const LARGE_DEVICE_CONTENT = (
    <FlexBox component='nav' sx={LIST_STYLE}>
      <Box
        component={Link}
        href='/'
        color={isActive("/") ? "primary.main" : "text.primary"}>
        Home
      </Box>

      {/* PAGES MEGA MENU */}
      <MegaMenu />

      <Box
        component={Link}
        href='/components'
        color={isActive("/") ? "primary.main" : "text.primary"}>
        Components
      </Box>

      <Box
        component={Link}
        href='http://Ton-doc.vercel.app/'
        color='text.primary'>
        Documentation
      </Box>

      <Button>Buy Now</Button>
    </FlexBox>
  );

  // FOR SMALL AND MEDIUM SCREEN DEVICE
  const SMALL_DEVICE_CONTENT = (
    <Fragment>
      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <Scrollbar>
          <List
            disablePadding
            sx={{
              minWidth: 260,
              height: "100%",
            }}>
            <ListItem
              sx={{
                mb: 1,
              }}>
              <img
                src='/static/logo/logo-svg.svg'
                alt='logo'
                width={40}
                height={40}
              />
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href='/'>
                Home
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{
                flexDirection: "column",
                alignItems: "start",
              }}>
              <ListItemButton
                onClick={() => setCollapsed(!collapsed)}
                sx={{
                  width: "100%",
                  justifyContent: "space-between",
                }}>
                Pages{" "}
                <ChevronDown
                  sx={{
                    rotate: collapsed ? "180deg" : 0,
                    transition: "rotate 300ms",
                  }}
                />
              </ListItemButton>

              <Collapse in={collapsed}>
                <Box px={2} py={1.5}>
                  {PAGES_MENUS.map(({ child, id, title }) => (
                    <Box key={id} pl={1} py={id === 2 ? 3 : 0}>
                      <MegaMenuList title={title} child={child} />
                    </Box>
                  ))}
                </Box>
              </Collapse>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href='/components'>
                Components
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                LinkComponent='a'
                href='http://Ton-doc.vercel.app/'>
                Documentation
              </ListItemButton>
            </ListItem>

            <ListItem
              sx={{
                mt: 1,
              }}>
              <Button fullWidth>Buy Now</Button>
            </ListItem>
          </List>
        </Scrollbar>
      </Drawer>

      <IconButton
        color='primary'
        onClick={() => setOpen(true)}
        sx={{
          flexShrink: 0,
        }}>
        <Menu />
      </IconButton>
    </Fragment>
  );
  return (
    <FlexBetween component='header' py={2}>
      {/* Ton LOGO */}
      <Box
        display='flex'
        component={Link}
        href='/'
        alignItems='center'
        gap={0.5}>
        <img
          src='/static/logo/logo-svg.svg'
          alt='logo'
          width={35}
          height={35}
        />
        <Paragraph fontSize={20} fontWeight={600} color='text.primary'>
          Ton
        </Paragraph>
      </Box>

      {isMedium ? LARGE_DEVICE_CONTENT : SMALL_DEVICE_CONTENT}
    </FlexBetween>
  );
}
