import {
  Box,
  Divider,
  Fade,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FlexRowAlign } from "../../components/flexbox";
import FlexBox from "../../components/flexbox/FlexBox";

const partnersData = [
  "/images/home/partner-1.svg",
  "/images/home/partner-2.svg",
  "/images/home/partner-3.svg",
  "/images/home/partner-4.svg",
  "/images/home/partner-5.svg",
];

export default function Partner() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Stack gap={5}>
        <FlexBox alignItems={"center"} gap={2}>
          <Typography variant='h6'>BACKED BY THE BEST</Typography>
          <Divider
            sx={{
              flex: 1,
              borderStyle: "dashed",
              borderColor: theme.palette.text.primary,
            }}
          />
        </FlexBox>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          {partnersData.map((item, index) => (
            <Grid item sm={2.4} xs={6} key={index}>
              <FlexRowAlign
                justifyContent={"center"}
                width={"100%"}
                height={"100%"}
                minHeight={{ xs: 80, md: 128 }}
                sx={{
                  borderRadius: 5,
                  background: theme.palette.background.card,
                }}>
                <Box component={"img"} src={item} width={"50%"} />
              </FlexRowAlign>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Fade>
  );
}
