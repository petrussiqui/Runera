import { Box, Fade, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Emble from "../page-sections/node/Emble";
import NodeOverview from "../page-sections/node/NodeOverview";

const tabsListConfig = [
  {
    label: "Node",
    value: "OVERVIEW",
    component: <NodeOverview />,
  },
  {
    label: "Emble",
    value: "EMBLE",
    component: <Emble />,
  },
];

export default function Node() {
  const theme = useTheme();
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [tabIndex, setTabIndex] = useState("OVERVIEW");

  useEffect(() => {
    switch (path) {
      case "/node/overview":
        setTabIndex("OVERVIEW");
        break;
      case "/node/emble":
        setTabIndex("EMBLE");
        break;
      default:
        setTabIndex("OVERVIEW");
    }
  }, [path]);

  return (
    <Fade in={true}>
      <Stack gap={5} pb={10}>
        <Stack gap={2} direction={"row"} justifyContent={"center"}>
          {tabsListConfig.map((item, index) => (
            <Box
              key={index}
              onClick={() => navigate(`/node/${item.value.toLowerCase()}`)}
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
