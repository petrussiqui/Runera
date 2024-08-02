import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Fade, Stack, styled, Tab, useTheme } from "@mui/material";
import { useState } from "react";
import ConnectWallet from "../page-sections/airdrop/ConnectWallet";
import LeaderBoard from "../page-sections/airdrop/LeaderBoard";
import NodeQuest from "../page-sections/airdrop/NodeQuest";
import SocialQuest from "../page-sections/airdrop/SocialQuest";

const tabsListConfig = [
  {
    label: "Social Quests",
    value: "Social",
    component: <SocialQuest />,
  },
  {
    label: "Node Quests",
    value: "Node",
    component: <NodeQuest />,
  },
  {
    label: "LeaderBoard",
    value: "LeaderBoard",
    component: <LeaderBoard />,
  },
];

export default function Airdrop() {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState("Social");

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Fade in={true}>
      <Stack gap={5} pb={10}>
        <ConnectWallet />

        <TabContext value={tabIndex}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}>
            <SpecialTabList indicatorColor='primary' onChange={handleChange}>
              {tabsListConfig.map((item, index) => (
                <Tab key={index} label={item.label} value={item.value} />
              ))}
            </SpecialTabList>
          </Stack>

          {tabsListConfig.map((item, index) => (
            <TabPanel value={item.value} key={index}>
              {item.component}
            </TabPanel>
          ))}
        </TabContext>
      </Stack>
    </Fade>
  );
}

export const SpecialTabList = styled(TabList)(({ theme }) => ({
  transition: "1s",
  "& button": {
    color: "#AFAFAF",
    minWidth: 160,
    fontSize: "1rem",
    fontWeight: 600,
  },
  "& button.Mui-selected": {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("sm")]: {
    "& button": {
      minWidth: 100,
    },
  },
}));
