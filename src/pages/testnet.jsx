import { Box, Fade, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Faucet from "../page-sections/testnet/Faucet";
import MintNFT from "../page-sections/testnet/MintNFT";

const tabsListConfig = [
  {
    label: "Faucet",
    value: "FAUCET",
    component: <Faucet />,
  },
  {
    label: "Mint NFT",
    value: "MINT-NFT",
    component: <MintNFT />,
  },
];

export default function Testnet() {
  const theme = useTheme();
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [tabIndex, setTabIndex] = useState("FAUCET");

  useEffect(() => {
    switch (path) {
      case "/testnet/faucet":
        setTabIndex("FAUCET");
        break;
      case "/testnet/mint-nft":
        setTabIndex("MINT-NFT");
        break;
      default:
        setTabIndex("FAUCET");
    }
  }, [path]);

  return (
    <Fade in={true}>
      <Stack gap={5} pb={10}>
        {tabIndex &&
          tabsListConfig.filter((item) => item.value === tabIndex)[0].component}
        <Stack gap={4} direction={"row"} justifyContent={"center"}>
          {tabsListConfig.map((item, index) => (
            <Box
              key={index}
              onClick={() => navigate(`/testnet/${item.value.toLowerCase()}`)}
              sx={{ cursor: "pointer" }}>
              <Typography
                textAlign={"center"}
                color={
                  tabIndex === item.value
                    ? theme.palette.primary[900]
                    : theme.palette.primary.main
                }>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Fade>
  );
}
