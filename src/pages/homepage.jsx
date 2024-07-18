import { Box, Fade, Grid, Stack, Typography } from "@mui/material";
import Mining from "../page-sections/homepage/Mining";
import { Boost } from "../page-sections/homepage/Boost";
import Referral from "../page-sections/homepage/referral";
// import Quest from "../page-sections/homepage/quest";
import { TypographyGradient } from "../components/typography";
import History from "../page-sections/homepage/history";
import {
  ButtonLoadingPrimary,
  ButtonLoadingSecondary,
  ButtonLoadingTertiary,
} from "../components/CustomButton";
import Solution from "../page-sections/homepage/Solution";
import Ecosystem from "../page-sections/homepage/Ecosystem";

export default function Homepage() {
  return (
    <Fade in={true}>
      <Box pb={10}>
        <Box mb={8} pb={8} position={"relative"}>
          <Box
            sx={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
              width: "90%",
              height: "7rem",
              borderRadius: "50%",
              background: "#5146CB",
              filter: "blur(100px)",
            }}
          />
          <Box position={"relative"} mb={4} zIndex={2}>
            <Box
              component='img'
              src='/images/bg-line.svg'
              alt='tonai'
              width='100%'
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
                width: "90%",
                height: "7rem",
                borderRadius: "50%",
                background: "#5146CB",
                filter: "blur(100px)",
              }}
            />
            <Box
              sx={{
                mt: { xs: -12, md: 0 },
                position: { xs: "relative", md: "absolute" },
                top: { xs: "unset", md: "35%" },
                left: { xs: "unset", md: "50%" },
                transform: { xs: "translateX(0)", md: "translateX(-50%)" },
              }}>
              <Stack alignItems={"center"} justifyContent={"center"}>
                <Box
                  component='img'
                  src='/logo.svg'
                  alt='tonai'
                  sx={{
                    width: { md: "170px", xs: "100px" },
                  }}
                />
                <TypographyGradient
                  mt={2}
                  fontWeight={600}
                  variant='h1'
                  sx={{
                    fontSize: { md: "4.5rem", xs: "2rem" },
                    whiteSpace: "nowrap",
                  }}
                  textAlign={"center"}>
                  The first AI Layer on
                  <br /> TON blockchain
                </TypographyGradient>
                <Typography
                  mt={2}
                  fontWeight={600}
                  variant={{ xs: "h6", md: "h5" }}
                  textAlign={"center"}
                  color={"text.secondary"}>
                  <i> Using AI GPU</i>
                </Typography>
                <Stack direction={{ xs: "column", md: "row" }} gap={2} mt={4}>
                  <ButtonLoadingPrimary>
                    <Typography variant='h6' fontWeight={600} color={"#010102"}>
                      Join community
                    </Typography>
                  </ButtonLoadingPrimary>
                  <ButtonLoadingSecondary>
                    <TypographyGradient variant='h6' fontWeight={600}>
                      Join Airdrop App
                    </TypographyGradient>
                  </ButtonLoadingSecondary>
                  <ButtonLoadingTertiary
                    sx={{
                      display: "flex",
                      direction: "row",
                      alignItems: "center",
                      gap: 1,
                    }}>
                    <TypographyGradient variant='h6' fontWeight={600}>
                      Buy GPU to mine TAI
                    </TypographyGradient>
                    <Box
                      component='img'
                      src='/images/TAI.svg'
                      alt='tai'
                      width='20px'
                    />
                  </ButtonLoadingTertiary>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Boost />
            </Grid>
            <Grid item xs={12} md={6}>
              <Mining />
            </Grid>
            <Grid item xs={12} md={6}>
              <Referral />
            </Grid>
            <Grid item xs={12} md={6}>
              <History />
            </Grid>
          </Grid>
        </Box>
        <Solution />
        <Ecosystem />
      </Box>
    </Fade>
  );
}
