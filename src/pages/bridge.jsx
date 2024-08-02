import { Fade, Stack } from "@mui/material";
import BridgePageView from "../page-sections/bridge";

export default function Bridge() {
  return (
    <Fade in={true}>
      <Stack gap={5} pb={10}>
        <BridgePageView />
      </Stack>
    </Fade>
  );
}
