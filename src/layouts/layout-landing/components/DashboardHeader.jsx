import { ArrowBack, ArrowDropDown, Menu } from "@mui/icons-material";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import FlexBetween from "../../../components/flexbox/FlexBetween";
import FlexRowAlign from "../../../components/flexbox/FlexRowAlign";
import { navigation } from "../context/navigation";
import useLayout from "../context/useLayout";
import { DashboardHeaderRoot, StyledToolBar } from "../styles";

const socials = [
  {
    icon: "twitter",
    link: "https://twitter.com/",
  },
  {
    icon: "telegram",
    link: "telegram.com",
  },
  {
    icon: "discord",
    link: "https://discord.com/",
  },
];

export default function DashboardHeader() {
  const theme = useTheme();
  const { active, handleActiveMainMenu, downMd } = useLayout();

  const [showSidebar, setShowSidebar] = useState(false);
  const handleOpen = () => {
    setShowSidebar(true);
  };

  const handleClose = () => {
    setShowSidebar(false);
  };

  const menuDesktop = navigation.map((nav, index) => (
    <StyledLink
      key={index}
      to={nav.path}
      className={active === nav.name ? "active" : ""}
      onClick={handleActiveMainMenu(nav)}>
      <Typography>{nav.name}</Typography>

      {nav.children && (
        <FlexRowAlign className='icon'>
          <ArrowDropDown />
        </FlexRowAlign>
      )}
    </StyledLink>
  ));

  return (
    <DashboardHeaderRoot position='sticky'>
      <StyledToolBar>
        <Container maxWidth='lg'>
          <FlexBetween pt={2}>
            <Link to={"/"}>
              <Box
                component={"img"}
                src='/logo.svg'
                alt=''
                sx={{
                  width: "110px",
                }}
              />
            </Link>
            {!downMd && (
              <Stack gap={3} direction={"row"}>
                {menuDesktop}
              </Stack>
            )}
            <Stack gap={3} direction={"row"}>
              {socials.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target='_blank'
                  rel='noopener'
                  underline='none'>
                  <Box
                    component={"img"}
                    src={`/images/icon-${item.icon}.svg`}
                    alt=''
                    sx={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </Link>
              ))}
            </Stack>
            {downMd && (
              <Box>
                <IconButton
                  onClick={handleOpen}
                  sx={{ color: theme.palette.primary.main }}>
                  <Menu />
                </IconButton>
                <Drawer
                  open={showSidebar}
                  anchor='right'
                  onClose={handleClose}
                  sx={{
                    "& .MuiPaper-root": {
                      background: theme.palette.background.paper,
                      backdropFilter: "blur(10px)",
                    },
                  }}>
                  <Box width={320} padding={2}>
                    <IconButton onClick={handleClose}>
                      <ArrowBack />
                    </IconButton>

                    <Stack gap={1.5} mt={2} ml={2}>
                      {navigation.map((nav, index) => (
                        <StyledLink
                          key={index}
                          to={nav.path}
                          className={active === nav.name ? "active" : ""}
                          onClick={() => {
                            handleActiveMainMenu(nav);
                            handleClose();
                          }}>
                          <Typography>{nav.name}</Typography>

                          {nav.children && (
                            <FlexRowAlign className='icon'>
                              <ArrowDropDown />
                            </FlexRowAlign>
                          )}
                        </StyledLink>
                      ))}
                    </Stack>
                  </Box>
                </Drawer>
              </Box>
            )}
          </FlexBetween>
        </Container>
      </StyledToolBar>
    </DashboardHeaderRoot>
  );
}

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "0.25rem",
  transition: "all 500ms",
  "&:hover, &.active": {
    color: `${theme.palette.primary.main} !important`,
    "& .icon": {
      color: `${theme.palette.primary.main} !important`,
      transform: "rotate(180deg)",
    },
  },
}));
