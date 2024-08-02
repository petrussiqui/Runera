import { Stack, styled } from "@mui/material";

export const QuestItemBox = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 16,
  minHeight: 120,
  background: theme.palette.background.default,
  border: `1px solid ${theme.palette.background.card}`,
  borderRadius: "0.5rem",
  transition: "all 0.3s ease-in-out",
  "& .icon:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
  },
}));

export const QuestTypeBox = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.5),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: 32,
  border: `1px solid ${theme.palette.text.secondary}`,
  borderRadius: "0.4rem",
}));

export const ClaimedBox = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.5),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: 32,
  borderRadius: "0.4rem",
}));
