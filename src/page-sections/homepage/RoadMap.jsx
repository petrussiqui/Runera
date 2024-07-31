import { Circle } from "@mui/icons-material";
import {
  Fade,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";

const valueData = [
  {
    title: "Q1.2024 (Completed)",
    list: [
      "Market Analysis: Study AI model platforms and decentralized computing networks. Assess competitors, trends, and opportunities.",
      " Technology Assessment: Research blockchain, distributed computing, and containerization for Runera Gaming x AI.",
      "User Needs: Gather user requirements through surveys and interviews.",
      "Partnerships: Identify potential partners for resources and technology.",
      "Feasibility: Evaluate technical, operational, and financial feasibility. Identify and mitigate risks.",
    ],
  },
  {
    title: "Q2.2024 (Completed)",
    list: [
      "Limited Beta Testing Deployment: Initial rollout to a designated group to gather insights and refine the product.",
      "Performance Enhancement: Optimization of systems to achieve peak efficiency and elevate user satisfaction.",
      "Comprehensive Documentation and Training: Creation of detailed guides and training resources for end-users and developers",
    ],
  },
  {
    title: "Q2/2024 - Q3/2024 (ONGOING)",
    list: [
      "  Alpha Testnet Launch for Runera: Introduction of Runera's core blockchain technology for initial testing and refinement",
      " Alpha Testnet Launch for Runera CPU, Runera GPU, Runera Storage: Testing and refining the functionality of each component within the Runera ecosystem",
      "Runera VerNode launch: Open the access for users to participate in Runera VerNode Program, with all required conditions met",
    ],
  },
  {
    title: "Q3/2024 - Q4/2024",
    list: [
      " Mainnet Launch: Official release of Runera to the public, offering a fully operational platform for users and developers.",
      "Preparation for TGE: Partner up with DEX, CEX and Launchpads for official listings of Runera's Native Tokens",
    ],
  },
];

const settings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 2.2,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  // cssEase: "linear",
  autoplay: false,
  arrows: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.5,
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

export default function RoadMap() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Stack gap={3}>
        <Typography fontWeight={600} variant='h2' fontStyle={"italic"}>
          ROADMAP
        </Typography>
        <Slider {...settings}>
          {valueData.map((item, index) => (
            <BoxSlide key={index}>
              <Stack
                minHeight={{ xs: 480, sm: 360 }}
                gap={1.5}
                sx={{
                  borderRadius: 5,
                  padding: "2rem",
                  backgroundColor: theme.palette.background.card,
                }}>
                <Typography
                  fontWeight={600}
                  variant='h6'
                  fontStyle={"italic"}
                  textAlign={"center"}>
                  {item.title}
                </Typography>
                <List
                  sx={{
                    "& .MuiListItem-root": {
                      alignItems: "flex-start",
                      paddingTop: 0,
                      paddingLeft: 0,
                      paddingRight: 0,
                    },
                    "& .MuiListItemIcon-root": {
                      color: theme.palette.text.primary,
                      mt: 0.6,
                      ml: 0.6,
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: "0.6rem",
                    },
                  }}>
                  {item.list.map((listItem, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Circle />
                      </ListItemIcon>
                      <ListItemText primary={listItem} />
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </BoxSlide>
          ))}
        </Slider>
      </Stack>
    </Fade>
  );
}
