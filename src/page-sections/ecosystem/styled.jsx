import { Stack, styled } from "@mui/material";

export const EcoItemBox = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 16,
  minHeight: 360,
  background: theme.palette.background.default,
  border: `1px solid ${theme.palette.background.card}`,
  borderRadius: "0.5rem",
  transition: "all 0.3s ease-in-out",
  "& .icon:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
  },
}));
export const EcoTypeBox = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1, 1.5),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: 40,
  background: "#343434",
  border: `1px solid ${theme.palette.background.card}`,
  borderRadius: "0.75rem",
}));
