import {
  Box,
  Card,
  Fade,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  TypographyGradient,
  TypographyPrimary,
} from "../../components/typography";

const valueData = [
  {
    title: "DePIN and AI Integration",
    description:
      "Runera integrates DePIN and AI into its gaming products, ensuring lightning-fast transactions and optimized experiences. This technology advancement enhances gameplay and user satisfaction within the Runera ecosystem.",
    background: "/images/home/value-1.svg",
  },
  {
    title: "EVM Ecosystem Compatibility",
    description:
      "Enhancing the gaming experience by integrating with the EVM Ecosystem, Runera creates optimal conditions for gamers through its dedicated platform.",
    background: "/images/home/value-2.svg",
  },
  {
    title: "ZK Stack Integration",
    description:
      "Simplify and optimize token creation using the ZK-Stack model to reduce blockchain bloat and improve scalability.",
    background: "/images/home/value-3.svg",
  },
];

export default function Value() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Stack gap={5}>
        <Typography
          fontWeight={600}
          variant='h2'
          fontStyle={"italic"}
          pr={{ xs: 0, md: 10 }}>
          Runera's Game-Changing Value Propositions
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {valueData.map((item, index) => (
            <Grid item sm={4} xs={12} key={index}>
              <Stack gap={1.5}>
                <Box component={"img"} src={item.background} width={"100%"} />
                <TypographyPrimary
                  mt={0.5}
                  fontWeight={600}
                  variant='h6'
                  fontStyle={"italic"}>
                  {item.title}
                </TypographyPrimary>
                <Typography variant='body1'>{item.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Fade>
  );
}
