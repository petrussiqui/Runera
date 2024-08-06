import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import { FlexBox } from "../../components/flexbox";

export default function Ranking() {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4.5}>
        <Card
          sx={{
            background: theme.palette.background.default,
            p: 2.5,
            borderRadius: "0.5rem",
          }}
        >
          <FlexBox gap={1}>
            <Box
              component={"img"}
              src={"/images/icons/icon-map.svg"}
              alt=""
              width={20}
            />
            <Typography fontWeight={500} color={"text.secondary"}>
              Global ranking - Online nodes
            </Typography>
          </FlexBox>
        </Card>
      </Grid>
      <Grid item xs={12} md={7.5}>
        <Card
          sx={{
            background: "transparent",
            p: 2.5,
            borderRadius: "0.5rem",
            border: `1px solid ${theme.palette.background.card}`,
          }}
        >
          <FlexBox gap={1}>
            <Box
              component={"img"}
              src={"/images/icons/icon-map.svg"}
              alt=""
              width={20}
            />
            <Typography fontWeight={500} color={"text.secondary"}>
              Geographic - Top Countries
            </Typography>
          </FlexBox>
        </Card>
      </Grid>
    </Grid>
  );
}
