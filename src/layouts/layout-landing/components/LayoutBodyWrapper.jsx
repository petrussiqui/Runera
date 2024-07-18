import Container from "@mui/material/Container";
import styled from "@mui/material/styles/styled";
import useLayout from "../context/useLayout";
import DashboardHeader from "./DashboardHeader";

export default function LayoutBodyWrapper({ children }) {
  const { openSecondarySideBar } = useLayout();
  return (
    <RootBox compact={openSecondarySideBar}>
      <DashboardHeader />
      <Container maxWidth={"lg"}>{children}</Container>
    </RootBox>
  );
}

const RootBox = styled("div", {
  shouldForwardProp: (prop) => prop !== "compact",
})(({ theme, compact }) => ({
  background: theme.palette.background.paper,
  minHeight: "100vh",
  transition: "margin-left 0.3s ease-in-out",
}));
