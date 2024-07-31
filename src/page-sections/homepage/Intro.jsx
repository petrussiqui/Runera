import { Box, Fade, Grid, Typography, useTheme } from "@mui/material";
import { ButtonContained, ButtonOutline } from "../../components/CustomButton";
import FlexBox from "../../components/flexbox/FlexBox";
export default function Intro() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Grid container spacing={{ xs: 2, md: 6 }}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight={700} variant='h2' fontStyle={"italic"}>
            Pioneering Bitcoin's Layer 2, optimized for{" "}
            <Typography
              component={"span"}
              fontWeight={700}
              variant='h2'
              color={theme.palette.primary.main}>
              Gaming x AI
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography lineHeight={2} mt={1}>
            Layer 2 blockchain in Bitcoin ecosystem fully compatible with the
            Ethereum Virtual Machine (EVM) ecosystem. Using native BTC for gas
            fees, Runera bridges the Bitcoin and EVM ecosystems, combining BTC's
            stability with EVM's flexibility to create a robust and innovative
            platform.
          </Typography>
          <FlexBox mt={{ xs: 2, md: 4 }} gap={4} mb={{ xs: 0, md: -2 }}>
            <ButtonOutline>MINT YOUR EMBLE</ButtonOutline>
            <ButtonContained>MINT YOUR EMBLE</ButtonContained>
          </FlexBox>
        </Grid>
        <Grid item xs={12}>
          <Box component={"img"} src='/images/home/intro.svg' width={"100%"} />
        </Grid>
      </Grid>
    </Fade>
  );
}
