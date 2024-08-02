import {
  Avatar,
  Card,
  Fade,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ButtonContained } from "../../components/CustomButton";
import { useState } from "react";
import {
  FlexBetween,
  FlexCenter,
  FlexRow,
} from "../../components/flexbox/CustomBox";
import { ClaimedBox } from "./styled";
import { fAddress } from "../../utils/format";

export default function ConnectWallet() {
  const theme = useTheme();
  const [isConnected, setIsConnected] = useState(false);

  const handleClick = () => {
    setIsConnected(!isConnected);
  };
  return (
    <Fade in={true}>
      <Stack alignItems={"center"} mt={4}>
        {isConnected ? (
          <FlexCenter px={{ xs: 0, sm: "25%" }} width={"100%"}>
            <Grid container spacing={{ xs: 2, md: 2 }}>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    background: "#000",
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}>
                  <Typography>
                    {fAddress("0x43h524ac28471b324b2318sK")}
                  </Typography>
                  <Typography
                    color={"error.main"}
                    sx={{ fontWeight: 500, cursor: "pointer" }}
                    onClick={handleClick}>
                    Signout
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={8}>
                <Card sx={{ background: "#000", p: 2, height: "100%" }}>
                  <FlexRow gap={1}>
                    <Avatar
                      src='/images/BTC.svg'
                      sx={{ width: 16, height: 16 }}
                    />
                    <Typography>BTC Balance</Typography>
                  </FlexRow>
                  <FlexBetween gap={1}>
                    <Typography fontWeight={600}>0.0123361</Typography>
                    <ClaimedBox
                      sx={{
                        background: theme.palette.primary.main,
                        cursor: "pointer",
                      }}
                      onClick={() => {}}>
                      <Typography
                        fontWeight={600}
                        sx={{ color: theme.palette.background.paper }}>
                        Claimed
                      </Typography>
                    </ClaimedBox>
                  </FlexBetween>
                </Card>
              </Grid>
            </Grid>
          </FlexCenter>
        ) : (
          <ButtonContained
            sx={{ minWidth: "200px", borderRadius: "0.4rem" }}
            onClick={handleClick}>
            Connect Wallet
          </ButtonContained>
        )}
      </Stack>
    </Fade>
  );
}
