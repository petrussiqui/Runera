import { Fade, Stack, Typography } from "@mui/material";
import Chart from "./Chart";
import Ranking from "./Ranking";
import System from "./System";

export default function NodeOverview() {
  return (
    <Fade in={true}>
      <Stack gap={2}>
        <Typography fontWeight={600} variant="h2" textAlign={"center"}>
          Node Overview
        </Typography>
        <System />
        <Chart />
        <Ranking />
      </Stack>
    </Fade>
  );
}
