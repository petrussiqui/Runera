import { Card, Fade, Stack, Typography, useTheme } from "@mui/material";

export default function NodeOverview() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Stack>
        <Typography fontWeight={600} variant='h2' textAlign={"center"}>
          Node Overview
        </Typography>
      </Stack>
    </Fade>
  );
}
