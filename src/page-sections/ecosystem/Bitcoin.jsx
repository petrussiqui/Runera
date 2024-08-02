import { ArrowOutward } from "@mui/icons-material";
import {
  Avatar,
  Fade,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "../../components/flexbox/FlexBetween";
import { EcoItemBox, EcoTypeBox } from "./styled";
const bitcoinData = [
  {
    title: "Portal",
    description:
      "The leading Web3 distribution platform. Powered by Portal Pay - our seamless cross-chain liquidity layer. We’ve redefined how users, games and dapps connect.",
    logo: "/images/ecosystem/portal.png",
  },
  {
    title: "Portal",
    description:
      "The leading Web3 distribution platform. Powered by Portal Pay - our seamless cross-chain liquidity layer. We’ve redefined how users, games and dapps connect.",
    logo: "/images/ecosystem/portal.png",
  },
  {
    title: "Portal",
    description:
      "The leading Web3 distribution platform. Powered by Portal Pay - our seamless cross-chain liquidity layer. We’ve redefined how users, games and dapps connect.",
    logo: "/images/ecosystem/portal.png",
  },
  {
    title: "Portal",
    description:
      "The leading Web3 distribution platform. Powered by Portal Pay - our seamless cross-chain liquidity layer. We’ve redefined how users, games and dapps connect.",
    logo: "/images/ecosystem/portal.png",
  },
  {
    title: "Portal",
    description:
      "The leading Web3 distribution platform. Powered by Portal Pay - our seamless cross-chain liquidity layer. We’ve redefined how users, games and dapps connect.",
    logo: "/images/ecosystem/portal.png",
  },
  {
    title: "Portal",
    description:
      "The leading Web3 distribution platform. Powered by Portal Pay - our seamless cross-chain liquidity layer. We’ve redefined how users, games and dapps connect.",
    logo: "/images/ecosystem/portal.png",
  },
  {
    title: "Portal",
    description:
      "The leading Web3 distribution platform. Powered by Portal Pay - our seamless cross-chain liquidity layer. We’ve redefined how users, games and dapps connect.",
    logo: "/images/ecosystem/portal.png",
  },
  {
    title: "Portal",
    description:
      "The leading Web3 distribution platform. Powered by Portal Pay - our seamless cross-chain liquidity layer. We’ve redefined how users, games and dapps connect.",
    logo: "/images/ecosystem/portal.png",
  },
  {
    title: "Portal",
    description:
      "The leading Web3 distribution platform. Powered by Portal Pay - our seamless cross-chain liquidity layer. We’ve redefined how users, games and dapps connect.",
    logo: "/images/ecosystem/portal.png",
  },
  {
    title: "Portal",
    description:
      "The leading Web3 distribution platform. Powered by Portal Pay - our seamless cross-chain liquidity layer. We’ve redefined how users, games and dapps connect.",
    logo: "/images/ecosystem/portal.png",
  },
  {
    title: "Portal",
    description:
      "The leading Web3 distribution platform. Powered by Portal Pay - our seamless cross-chain liquidity layer. We’ve redefined how users, games and dapps connect.",
    logo: "/images/ecosystem/portal.png",
  },
  {
    title: "Portal",
    description:
      "The leading Web3 distribution platform. Powered by Portal Pay - our seamless cross-chain liquidity layer. We’ve redefined how users, games and dapps connect.",
    logo: "/images/ecosystem/portal.png",
  },
];
export default function Bitcoin() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Stack gap={2}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {bitcoinData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EcoItemBox>
                <Stack
                  gap={1.5}
                  justifyContent={"center"}
                  alignItems={"center"}>
                  <Avatar src={item.logo} width={86} />
                  <Typography textAlign={"center"}>{item.title}</Typography>
                  <Typography textAlign={"center"}>
                    {item.description}
                  </Typography>
                </Stack>
                <FlexBetween width={"100%"}>
                  <EcoTypeBox>
                    <Typography>Defi</Typography>
                  </EcoTypeBox>
                  <IconButton
                    sx={{
                      background: theme.palette.text.primary,
                      color: theme.palette.background.paper,
                      "&:hover": {
                        background: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                      },
                    }}>
                    <ArrowOutward />
                  </IconButton>
                </FlexBetween>
              </EcoItemBox>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Fade>
  );
}
