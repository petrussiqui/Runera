import {
  Box,
  Card,
  Fade,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ButtonLoadingPrimary } from "../../components/CustomButton";
const ecosystemData = [
  {
    title: "ChatBot",
    description:
      "Real-time conversations between two advanced AI models on Telegram",
    background: "/images/bg-ecosystem-1.svg",
    mdWidth: 4,
    link: "#",
  },
  {
    title: "AI Voice",
    description:
      "Instantly convert voice-to-text and text-to-voice. Easily modify voices to create unique audio experiences",
    background: "/images/bg-ecosystem-2.svg",
    mdWidth: 4,
    link: "#",
  },
  {
    title: "AI Video",
    description:
      "Instantly transform voice-to-video and text-to-video. Easily alter voices to craft unique audio experiences",
    background: "/images/bg-ecosystem-3.svg",
    mdWidth: 4,
    link: "#",
  },
];
export default function Ecosystem() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Box mb={8} pb={8} position={"relative"}>
        <Stack alignItems={"center"} justifyContent={"center"} my={4} gap={2}>
          <Typography fontWeight={600} variant='h3'>
            Our AI Ecosystem
          </Typography>
          <Typography fontWeight={400} variant='h6' textAlign={"center"}>
            Discover a wide array of curated open-source AI models powered by
            TONAI
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 1, md: 4 }}>
          {ecosystemData.map((item, index) => (
            <Grid item md={item.mdWidth} xs={12} key={index}>
              <Card
                sx={{
                  backgroundImage: `url(${item.background})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: "0.875rem",
                  padding: { xs: "1rem", md: "2rem 1.5rem" },
                  boxShadow: "none",
                  height: "100%",
                  minHeight: {
                    xs: 200,
                    md: 260,
                  },
                }}>
                <Box
                  sx={{
                    background: theme.palette.linear.primary,
                    padding: "0.25rem 1rem",
                    borderRadius: "1rem",
                    display: "inline-block",
                  }}>
                  <Typography
                    variant='body2'
                    color={theme.palette.background.paper}>
                    LLM API
                  </Typography>
                </Box>
                <Typography fontWeight={500} variant='h5' mt={1.5}>
                  {item.title}
                </Typography>
                <Typography
                  variant='body1'
                  mt={1.5}
                  pr={{ xs: "30%", md: "35%" }}>
                  {item.description}
                </Typography>

                <ButtonLoadingPrimary
                  href={item.link}
                  sx={{
                    mt: 4,
                  }}>
                  <Typography
                    variant='body1'
                    color={theme.palette.background.paper}>
                    Try ChatBot
                  </Typography>
                </ButtonLoadingPrimary>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  );
}
