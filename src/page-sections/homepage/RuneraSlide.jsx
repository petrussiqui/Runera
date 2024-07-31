import { Box, Stack, styled, useTheme } from "@mui/material";
import Slider from "react-slick";
const runeraImg = "/images/home/runera.svg";
const star = "/images/home/icon-star.svg";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: "linear",
  pauseOnHover: true,
  slidesToShow: 9,
  initialSlide: 0,
  paddingLeft: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};
export const BoxSlide = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  display: "flex!important",
  alignItems: "center",
  height: 36,
}));
export default function RuneraSlide() {
  const theme = useTheme();
  return (
    <Box
      height={72}
      my={10}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Box
        sx={{
          position: "absolute",
          backgroundColor: theme.palette.primary.main,
          width: "100%",
          height: "72px",
          left: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Box width={"100%"}>
          <Slider {...settings}>
            {[...Array(10)].map((item, index) => (
              <BoxSlide key={index}>
                <Box
                  component={"img"}
                  src={index % 2 === 0 ? runeraImg : star}
                  alt=''
                  sx={{ scale: "90%" }}
                />
              </BoxSlide>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}
