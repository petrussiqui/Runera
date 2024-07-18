import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";

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
