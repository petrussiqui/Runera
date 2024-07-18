import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import FlexBetween from "../../../components/flexbox/FlexBetween";
import { DashboardHeaderRoot, StyledToolBar } from "../styles";

const socials = [
  {
    icon: "telegram",
    link: "telegram.com",
  },
  {
    icon: "twitter",
    link: "https://twitter.com/",
  },
  {
    icon: "gitbook",
    link: "https://docs.ton.org/",
  },
];

export default function DashboardHeader() {
  return (
    <DashboardHeaderRoot position='sticky'>
      <StyledToolBar>
        <Container maxWidth='lg'>
          <FlexBetween pt={2}>
            <Link to={"/"}>
              <Box
                component={"img"}
                src='/logo.svg'
                alt=''
                sx={{
                  width: "100px",
                }}
              />
            </Link>
            <Stack gap={4} direction={"row"}>
              {socials.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target='_blank'
                  rel='noopener'
                  underline='none'>
                  <Box
                    component={"img"}
                    src={`/images/${item.icon}.svg`}
                    alt=''
                    sx={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </Link>
              ))}
            </Stack>
          </FlexBetween>
        </Container>
      </StyledToolBar>
    </DashboardHeaderRoot>
  );
}
