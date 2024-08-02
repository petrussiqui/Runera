import { Box, Card, Fade, Stack, Typography, useTheme } from "@mui/material";
import { FlexBetween } from "../../components/flexbox/CustomBox";

export default function LoginWith({ onLogin }) {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Stack alignItems={"center"} justifyContent={"center"} height={"50vh"}>
        <Box
          component={"img"}
          src='/images/ref-bg.svg'
          sx={{
            height: "100%",
            width: "100%",
            position: "fixed",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
        <Card
          sx={{
            background: theme.palette.background.default,
            p: 3,
            zIndex: 1,
            width: "min(100%, 400px)",
          }}>
          <Stack gap={1.5}>
            <Typography textAlign={"center"} mb={1}>
              Login with
            </Typography>
            <FlexBetween
              onClick={onLogin}
              p={1}
              sx={{
                borderRadius: "0.5rem",
                background: theme.palette.background.card,
                cursor: "pointer",
              }}>
              <Typography>Connect Wallet</Typography>
              <Box
                component={"img"}
                src={"/images/connect-wallet.png"}
                width={24}
              />
            </FlexBetween>
            <FlexBetween
              onClick={onLogin}
              p={1}
              sx={{
                borderRadius: "0.5rem",
                background: theme.palette.background.card,
                cursor: "pointer",
              }}>
              <Typography>Connect Twitter</Typography>
              <Box component={"img"} src={"/images/connect-x.png"} width={24} />
            </FlexBetween>
            <FlexBetween
              onClick={onLogin}
              p={1}
              sx={{
                borderRadius: "0.5rem",
                background: theme.palette.background.card,
                cursor: "pointer",
              }}>
              <Typography>Connect Telegram</Typography>
              <Box
                component={"img"}
                src={"/images/connect-telegram.png"}
                width={24}
              />
            </FlexBetween>
          </Stack>
        </Card>
      </Stack>
    </Fade>
  );
}
