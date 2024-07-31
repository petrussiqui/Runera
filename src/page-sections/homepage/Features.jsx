import {
  Box,
  Fade,
  Grid,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { ButtonOutline } from "../../components/CustomButton";
import FlexBox from "../../components/flexbox/FlexBox";
import Slider from "react-slick";

const valueData = [
  {
    title: "Runera Emblem",
    subTitle: "Runera Node",
    description:
      "The Runera Emblem is a non-fungible token (NFT) symbolizing active participation, commitment, and contribution in the Runes community. Unique and traceable on the blockchain, these Emblems are intentionally non-transferable, representing the personal and indivisible dedication of their owners.",
    background: "/images/home/feature-1.svg",
  },
  {
    title: "Users are at the center of Runera",
    subTitle: "Benefit of Emble Holders",
    description:
      "Runera prioritizes users as the center of the product, meaning that all user actions benefit Emble holders. 70% of revenue from chain activities will be clearly allocated to users. Additionally, Emble holders will have the opportunity to mint tokens at a rate of 0.04% per day and enjoy many other exclusive privileges.",
    background: "/images/home/feature-2.svg",
  },
  {
    title: "Referral and Cashback",
    subTitle: "Affiliate",
    description:
      "For KOLs or brand ambassadors of Runera, or simply for referring friends through the affiliate program, cashback of up to 25% depending on the quantity will be provided.",
    background: "/images/home/feature-3.svg",
  },
];

const settings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 1.2,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  autoplay: false,
  arrows: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.1,
      },
    },
  ],
};
export const BoxSlide = styled(Stack)(({ theme }) => ({
  padding: "1rem",
  "& .slick-initialized .slick-slide": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem",
    height: "auto",
  },
}));

export default function Features() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Stack gap={3}>
        <Typography fontWeight={600} variant='h2' fontStyle={"italic"}>
          Our Features
        </Typography>
        <Slider {...settings}>
          {valueData.map((item, index) => (
            <BoxSlide key={index}>
              <FlexBox
                gap={{ xs: 0, sm: 1.5 }}
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  borderRadius: 5,
                  backgroundColor: theme.palette.background.card,
                  minHeight: { xs: 560, sm: 400 },
                }}>
                <Box
                  component={"img"}
                  src={item.background}
                  width={{ xs: "100%", sm: "40%", md: "35%" }}
                  sx={{
                    borderRadius: { xs: "20px 20px 0 0", sm: "20px 0 0 20px" },
                    objectFit: "cover",
                    maxHeight: { xs: 150, sm: "unset" },
                  }}
                />
                <Stack
                  px={{ xs: 2, md: 5 }}
                  py={{ xs: 4, md: 7 }}
                  gap={2}
                  alignItems={"start"}
                  justifyContent={"space-between"}
                  minHeight={"100%"}>
                  <Stack gap={{ xs: 1, md: 2 }} alignItems={"start"}>
                    <Box
                      sx={{
                        padding: "6px 12px",
                        background: theme.palette.primary.main,
                        width: "max-content",
                      }}>
                      <Typography variant='body2' color={"#000"}>
                        {item.subTitle}
                      </Typography>
                    </Box>
                    <Typography
                      mt={0.5}
                      fontWeight={600}
                      variant='h6'
                      fontStyle={"italic"}>
                      {item.title}
                    </Typography>
                    <Typography variant='body1'>{item.description}</Typography>
                  </Stack>
                  <ButtonOutline>
                    <b> MINT YOUR EMBLEM</b>
                  </ButtonOutline>
                </Stack>
              </FlexBox>
            </BoxSlide>
          ))}
        </Slider>
      </Stack>
    </Fade>
  );
}
