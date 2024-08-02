import {
  Box,
  Card,
  Fade,
  OutlinedInput,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FlexCenter, FlexRow } from "../../components/flexbox/CustomBox";
import { ButtonContained } from "../../components/CustomButton";

export default function Faucet() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ height: "60vh" }}>
        <Card
          sx={{
            background: theme.palette.background.default,
            p: 3,
            zIndex: 1,
            width: "min(100%, 400px)",
          }}>
          <Stack gap={2}>
            <FlexRow gap={1}>
              <Box component={"img"} src={"/images/RUNES.svg"} width={52} />
              <Box>
                <Typography fontWeight={600} variant='h6'>
                  Runes Chain faucet
                </Typography>
                <Typography>Request faucet for 0.1 rBTC</Typography>
              </Box>
            </FlexRow>
            <OutlinedInput
              sx={{
                background: theme.palette.background.input,
                borderRadius: "0.875rem",
                fieldset: { borderRadius: "0.875rem" },
              }}
              placeholder={"EVM wallet address"}
              size='small'
              fullWidth
              endAdornment={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "0.5rem",
                    background: theme.palette.background.card,
                    padding: "0.5rem",
                  }}>
                  <Box
                    component={"img"}
                    src={"/images/icon-wallet.svg"}
                    width={20}
                  />
                </Box>
              }
              // {...getFieldProps("amount")}
              // error={Boolean(errors.amount) && Boolean(touched.amount)}
              // helperText={Boolean(touched.amount) && errors.amount}
            />
            <FlexCenter>
              <ButtonContained size='small' sx={{ mt: 2 }}>
                Request Funds
              </ButtonContained>
            </FlexCenter>
          </Stack>
        </Card>
      </Stack>
    </Fade>
  );
}
