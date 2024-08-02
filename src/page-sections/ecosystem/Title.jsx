import { Fade, Stack, Typography, useTheme } from "@mui/material";

export default function Title() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Stack gap={2}>
        <Typography fontWeight={600} variant='h2' textAlign={"center"}>
          Expolre The Runeschain Ecosystem
        </Typography>
        <Typography textAlign={"center"} sx={{ px: { xs: "0", md: "20%" } }}>
          Enjoy all your favorite dapps from DeFi, Inscription,NFT's Gaming, to
          DAOs and join the Bitcoin revolution.
        </Typography>
      </Stack>
    </Fade>
  );
}
