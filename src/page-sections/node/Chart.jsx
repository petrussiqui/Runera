import { Circle } from "@mui/icons-material";
import { Card, Typography, useTheme } from "@mui/material";
import { FlexBox } from "../../components/flexbox";

export default function Chart() {
  const theme = useTheme();
  return (
    <Card
      sx={{
        background: theme.palette.background.default,
        p: 2.5,
        borderRadius: "0.5rem",
        border: `1px solid ${theme.palette.background.card}`,
      }}
    >
      <Typography variant="h6" fontWeight={600}>
        Volume followed by Timeserial
      </Typography>
      <FlexBox
        alignItems={"center"}
        gap={0.5}
        sx={{ svg: { color: "#AFAFAF" } }}
      >
        <Circle fontSize="small" />
        <Typography>Volume</Typography>
      </FlexBox>
    </Card>
  );
}
