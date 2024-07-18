import {
  Box,
  Card,
  Fade,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { TypographyGradient } from "../../components/typography";

const solutionData = [
  {
    title: "TON AI Layer",
    description:
      "The TON AI Layer, created by TONAI, utilizes blockchain technology to allow developers to create AI applications and agents directly on-chain using smart contracts.",
    background: "/images/bg-solution-1.svg",
    mdWidth: 6,
    xsWidth: 12,
  },
  {
    title: "TON's LLM",
    description:
      "At the heart of the TON ecosystem lies the Large Language Model (LLM), driven by cutting-edge machine learning algorithms and blockchain technology. This LLM is a distinctive, uncensored linguistic AI model.",
    background: "/images/bg-solution-2.svg",
    mdWidth: 3,
    xsWidth: 6,
  },
  {
    title: "TON SDK",
    description:
      "TONAI's SDK offers serverless access to AI models, allowing developers to reduce costs, scale rapidly, and enter the market efficiently.",
    background: "/images/bg-solution-3.svg",
    mdWidth: 3,
    xsWidth: 6,
  },
  {
    title: "TONAI Clouds",
    description:
      "More than just offering a platform, SModel Clouds creates an open-source sanctuary for AI models, enabling developers to collaborate, innovate, and advance the frontiers of artificial intelligence.",
    background: "/images/bg-solution-4.svg",
    mdWidth: 6,
    xsWidth: 12,
  },
  {
    title: "AI Ecosystem",
    description:
      "Develop from basic LLM features in existing dApps to advanced AI agents, including chatbots, AI-generated images, voice changers, and much more.",
    background: "/images/bg-solution-5.svg",
    mdWidth: 6,
    xsWidth: 12,
  },
];

export default function Solution() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Box mb={8} pb={8} position={"relative"}>
        <Stack alignItems={"center"} justifyContent={"center"} my={4} gap={2}>
          <Typography fontWeight={600} variant='h3'>
            Our Solutions
          </Typography>
          <Typography fontWeight={400} variant='h6' textAlign={"center"}>
            Explore a diverse range of curated open-source AI models Powered by
            SynonAI.
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 1, md: 4 }}>
          {solutionData.map((item, index) => (
            <Grid item md={item.mdWidth} xs={item.xsWidth} key={index}>
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
                <TypographyGradient fontWeight={500} variant='h5'>
                  {item.title}
                </TypographyGradient>
                <Typography variant='body1' mt={1}>
                  {item.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  );
}
