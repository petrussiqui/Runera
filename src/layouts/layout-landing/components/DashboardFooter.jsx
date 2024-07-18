import {
  AppBar,
  Box,
  Button,
  Grid,
  Toolbar,
  alpha,
  styled,
  useTheme,
} from "@mui/material";
import { t } from "i18next";
import { TypographyGradient } from "../../../components/typography";
import { navigation } from "../context/navigation";
import useLayout from "../context/useLayout";
export default function DashboardFooter() {
  const { active, handleActiveMainMenu } = useLayout();
  const theme = useTheme();
  return (
    <DashboardFooterRoot position='sticky'>
      <StyledToolBar>
        <Grid container height={"100%"} columnSpacing={1}>
          {navigation.map((nav, index) => (
            <Grid item xs={3} key={index}>
              <StyledButton
                disableRipple
                className={active === nav.name ? "active" : ""}
                onClick={handleActiveMainMenu(nav)}>
                <Box className='icon'>{nav.Icon}</Box>
                <TypographyGradient
                  variant='caption'
                  className='text'
                  mb={-1}
                  sx={{
                    background: theme.palette.linear.secondary,

                    WebkitBackgroundClip: "text",
                  }}>
                  {t(nav.name)}
                </TypographyGradient>
              </StyledButton>
            </Grid>
          ))}
        </Grid>
      </StyledToolBar>
    </DashboardFooterRoot>
  );
}

const StyledButton = styled(Button)(({ theme }) => ({
  // height: '100%',
  width: "100%",
  flexDirection: "column",
  background: "none !important",
  height: 60,
  color: theme.palette.text.disabled,

  "& .icon": {
    transform: "translateY(8px) scale(1.2)",
    transition: "all 0.2s ease-in-out",
  },
  "& .text": {
    transform: "translateY(-10px)",
    transition: "all 0.2s ease-in-out",
    opacity: 0,
  },
  "& .MuiTypography-root": {
    paddingTop: "5px",
    fontWeight: 500,
  },
  "&:hover, &.active": {
    "& .icon": {
      transform: "translateY(0px) scale(1.1)",
      color: `${theme.palette.primary.main} !important`,
    },
    "& .text": {
      transform: "translateY(0px)",
      opacity: 1,
      color: `${theme.palette.primary.main} !important`,
    },
  },
}));

const DashboardFooterRoot = styled(AppBar)(({ theme }) => ({
  bottom: 0,
  background: theme.palette.background.input,
  boxShadow: "none",
  padding: "10px",
  borderTop: "1px solid #2C2C2C",
}));

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  bottom: 0,
  background: theme.palette.background.input,
  // borderRadius: "0.7rem",
  backdropFilter: "blur(50px)",
  padding: "0px 0px 10px !important",
  height: 60,
}));
