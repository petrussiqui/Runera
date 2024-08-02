import { Card, Fade, Stack, Typography, useTheme } from "@mui/material";
import ReferralHistory from "./EmpleTable";

export default function Emble() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Stack gap={4}>
        <Typography fontWeight={600} variant='h2' textAlign={"center"}>
          Run your Emble
        </Typography>
        <Card
          sx={{
            background: theme.palette.background.default,
            p: 2.5,
          }}>
          <Card
            sx={{
              background: theme.palette.grey[100],
              p: 2.5,
            }}>
            <ReferralHistory />
          </Card>
        </Card>
      </Stack>
    </Fade>
  );
}
