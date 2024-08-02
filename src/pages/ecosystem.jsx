import { Box, Fade, Stack, Typography, useTheme } from "@mui/material";
import Title from "../page-sections/ecosystem/Title";
import Bitcoin from "../page-sections/ecosystem/Bitcoin";
import AI from "../page-sections/ecosystem/AI";
import Game from "../page-sections/ecosystem/Game";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const tabsListConfig = [
  {
    label: "Bitcoin",
    value: "BITCOIN",
    component: <Bitcoin />,
  },
  {
    label: "AI",
    value: "AI",
    component: <AI />,
  },
  {
    label: "Game",
    value: "GAME",
    component: <Game />,
  },
];

export default function Ecosystem() {
  const theme = useTheme();
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [tabIndex, setTabIndex] = useState("BITCOIN");

  useEffect(() => {
    switch (path) {
      case "/ecosystem/bitcoin":
        setTabIndex("BITCOIN");
        break;
      case "/ecosystem/ai":
        setTabIndex("AI");
        break;
      case "/ecosystem/game":
        setTabIndex("GAME");
        break;
      default:
        setTabIndex("BITCOIN");
    }
  }, [path]);

  return (
    <Fade in={true}>
      <Stack gap={5} pb={10}>
        <Title />
        <Stack gap={2} direction={"row"} justifyContent={"center"}>
          {tabsListConfig.map((item, index) => (
            <Box
              key={index}
              onClick={() => navigate(`/ecosystem/${item.value.toLowerCase()}`)}
              className={tabIndex === item.value ? "active" : ""}
              sx={{
                width: 80,
                cursor: "pointer",
                padding: "0.5rem 1rem",

                backgroundColor: theme.palette.background.card,
                "&:hover, &.active": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}>
              <Typography
                textAlign={"center"}
                color={
                  tabIndex === item.value
                    ? theme.palette.primary[900]
                    : "text.primary"
                }>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>
        {tabIndex &&
          tabsListConfig.filter((item) => item.value === tabIndex)[0].component}
      </Stack>
    </Fade>
  );
}
