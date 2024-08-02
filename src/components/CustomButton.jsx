import { LoadingButton } from "@mui/lab";
import { Button, styled } from "@mui/material";

export const ButtonLoadingPrimary = styled(LoadingButton)(({ theme }) => ({
  color: "#010102",
  background: "linear-gradient(90deg, #6C69FF 0%, #699DEC 100%)",
  padding: theme.spacing(1, 3),
  borderRadius: "6rem",
  transition: "0.5s",
  "&:hover": {
    background: "linear-gradient(180deg, #6C69FF 0%, #699DEC 100%)",
    border: "none",
    transform: "translate3d(0, -4px, 0)",
  },
  "&.Mui-disabled": {
    color: theme.palette.text.secondary,
    border: "none",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "100px",
  },
}));
export const ButtonLoadingSecondary = styled(LoadingButton)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: theme.spacing(1, 3),
  borderRadius: "6rem",
  position: "relative",
  transition: "0.5s",
  p: { zIndex: 2 },
  div: { zIndex: 2 },
  "&::before": {
    content: "''",
    position: "absolute",
    background: "linear-gradient(90deg, #6C69FF 0%, #699DEC 100%)",
    inset: "0px",
    zIndex: 1,
    borderRadius: "6rem",
    padding: "1px",
    WebkitMask:
      "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box,linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
    WebkitMaskComposite: "xor",
  },
  "&:hover": {
    background: theme.palette.background.paper,
    border: "none",
    transform: "translate3d(0, -4px, 0)",
  },
  "&.Mui-disabled": {
    color: theme.palette.text.secondary,
    border: "none",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "100px",
  },
}));
export const ButtonLoadingTertiary = styled(LoadingButton)(({ theme }) => ({
  background: "transparent",
  padding: theme.spacing(1, 3),
  borderRadius: "6rem",
  transition: "0.5s",
  position: "relative",
  p: { zIndex: 2 },
  div: { zIndex: 2 },
  "&::before": {
    content: "''",
    position: "absolute",
    background: "linear-gradient(90deg, #6C69FF 0%, #699DEC 100%)",
    inset: "0px",
    zIndex: 1,
    borderRadius: "6rem",
    padding: "1px",
    WebkitMask:
      "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box,linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
    WebkitMaskComposite: "xor",
  },
  "&:hover": {
    background: theme.palette.background.paper,
    border: "none",
    transform: "translate3d(0, -4px, 0)",
  },
  "&.Mui-disabled": {
    color: theme.palette.text.secondary,
    border: "none",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "100px",
  },
}));

export const ButtonOutline = styled(Button)(({ theme }) => ({
  background: "transparent",
  padding: theme.spacing(1, 3),
  borderRadius: "1rem",
  transition: "0.5s",
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  fontSize: "1.5rem",
  "&:hover": {
    background: theme.palette.background.paper,
    transform: "translate3d(0, -4px, 0)",
    boxShadow: theme.shadows[2],
  },
  "&.Mui-disabled": {
    color: theme.palette.text.secondary,
    border: "none",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "100px",
    fontSize: "1rem",
    padding: theme.spacing(0, 3),
    height: "40px",
  },
}));
export const ButtonContained = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: theme.spacing(1, 3),
  borderRadius: "1rem",
  transition: "0.5s",
  color: theme.palette.background.paper,
  fontSize: "1.5rem",
  fontWeight: 600,
  "&:hover": {
    background: theme.palette.primary.main,
    // transform: "translate3d(0, -4px, 0)",
    boxShadow: theme.shadows[2],
  },
  "&.Mui-disabled": {
    color: theme.palette.text.secondary,
    border: "none",
  },
  "&.MuiButton-sizeSmall": {
    fontSize: "1rem",
    padding: theme.spacing(0.5, 2),
    borderRadius: "0.4rem",
    minHeight: 30,
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "100px",
    fontSize: "1rem",
    padding: theme.spacing(0, 3),
    height: "40px",
    "&.MuiButton-sizeSmall": {
      fontSize: "1rem",
      padding: theme.spacing(0, 2),
      borderRadius: "0.4rem",
      height: 30,
      minWidth: "64px",
    },
  },
}));
