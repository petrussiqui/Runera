import { Box, Fade, Stack } from "@mui/material";
import Intro from "../page-sections/homepage/Intro";
import Value from "../page-sections/homepage/Value";
import Features from "../page-sections/homepage/Features";
import RuneraSlide from "../page-sections/homepage/RuneraSlide";
import Partner from "../page-sections/homepage/Partner";
import Join from "../page-sections/homepage/Join";
import RoadMap from "../page-sections/homepage/RoadMap";

export default function Node() {
  return (
    <Fade in={true}>
      <Stack gap={5} pb={10}>
        <Intro />
        <Box height={72} my={10}>
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "#2B2B2B",
              width: "100%",
              height: "72px",
              left: "0px",
            }}
          />
        </Box>
        <Features />
        <Value />
        <RoadMap />
        <RuneraSlide />
        <Partner />
        <Join />
      </Stack>
    </Fade>
  );
}
