import { Box, Fade, Grid, Stack, Typography, useTheme } from "@mui/material";
import { ButtonContained } from "../../components/CustomButton";
export default function Join() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Box mt={5}>
        <Grid container spacing={{ xs: 2, md: 4 }} sx={{}}>
          <Grid item xs={12} sm={7}>
            <Box component={"img"} src='/images/home/join.svg' width={"100%"} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Stack
              justifyContent={"space-between"}
              alignItems={"start"}
              height={"100%"}
              gap={2}>
              <Typography
                fontWeight={700}
                variant='h2'
                sx={{ fontSize: { xs: "3rem", md: "5rem" } }}
                fontStyle={"italic"}>
                JOIN{" "}
                <Typography
                  component={"span"}
                  fontWeight={700}
                  variant='h2'
                  sx={{ fontSize: { xs: "3rem", md: "5rem" } }}
                  color={theme.palette.primary.main}>
                  RUNERA
                </Typography>{" "}
                COMMUNITY
              </Typography>
              <ButtonContained fullWidth>JOIN NOW</ButtonContained>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
}
