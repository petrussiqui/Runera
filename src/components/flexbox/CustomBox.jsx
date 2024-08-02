import { styled, Box } from "@mui/material";

export const FlexRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const FlexCenter = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const FlexBetween = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
