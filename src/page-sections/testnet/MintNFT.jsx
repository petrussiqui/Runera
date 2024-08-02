import {
  Box,
  ButtonBase,
  Card,
  Fade,
  Grid,
  OutlinedInput,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { FlexCenter, FlexRow } from "../../components/flexbox/CustomBox";
import { ButtonContained } from "../../components/CustomButton";
import { useState } from "react";
import Decimal from "decimal.js";

export default function Faucet() {
  const theme = useTheme();
  const [mintAmount, setMintAmount] = useState(1);
  return (
    <Fade in={true}>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Card
          sx={{
            zIndex: 1,
            width: "min(100%, 600px)",
            mt: -3,
          }}>
          <Stack gap={0.5}>
            <Stack alignItems={"center"} gap={2} mb={2}>
              <Card
                sx={{
                  background: theme.palette.primary.main,
                  width: "min(100%, 250px)",
                  aspectRatio: "1/1",
                }}></Card>
              <Typography fontWeight={600} variant='h6'>
                Runera ORIGIN
              </Typography>
              <Typography>
                <b>Runera Origin</b> is an limited NFT collection for only who
                joined <b>Layer2 testnet</b> , as a sign of appreciation for the
                contributions to the project.
              </Typography>
            </Stack>

            <Grid container spacing={{ xs: 2 }}>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    background: theme.palette.background.default,
                    p: 1,
                    height: "100%",
                  }}>
                  <Typography
                    fontWeight={600}
                    variant='h6'
                    textAlign={"center"}>
                    0
                    <Typography
                      color={"text.third"}
                      component={"span"}
                      variant='h6'>
                      /4444
                    </Typography>
                  </Typography>
                  <Typography color={"text.third"} textAlign={"center"}>
                    Minted
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    background: theme.palette.background.default,
                    p: 1,
                    gap: 1,
                    height: "100%",
                  }}>
                  <Typography
                    fontWeight={600}
                    variant='h6'
                    textAlign={"center"}>
                    0.000651 ETH
                  </Typography>
                  <Typography color={"text.third"} textAlign={"center"}>
                    Price
                  </Typography>
                </Card>
              </Grid>
            </Grid>
            <StyledInput
              size='small'
              fullWidth
              placeholder='0'
              value={mintAmount}
              onChange={(e) => setMintAmount(e.target.value)}
              sx={{
                background: theme.palette.background.input,
                color: theme.palette.text.primary,
              }}
              startAdornment={
                <ButtonBase
                  disableRipple
                  sx={{ fontSize: "2rem", marginTop: "-5px", fontWeight: 700 }}
                  onClick={() =>
                    setMintAmount(Decimal.max(0, parseInt(mintAmount || 0) - 1))
                  }>
                  -
                </ButtonBase>
              }
              endAdornment={
                <ButtonBase
                  disableRipple
                  sx={{ fontSize: "2rem", marginTop: "-5px", fontWeight: 700 }}
                  onClick={() => setMintAmount(parseInt(mintAmount || 0) + 1)}>
                  +
                </ButtonBase>
              }
            />
            <ButtonContained sx={{ py: 1, fontSize: "1.25rem" }}>
              Mint
            </ButtonContained>
          </Stack>
        </Card>
      </Stack>
    </Fade>
  );
}

export const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  margin: "1rem 0px",
  input: {
    textAlign: "center",
  },
  "& fieldset": {
    borderRadius: "0.5rem",
    border: `1px solid ${theme.palette.text.disabled} !important`,
  },
}));
