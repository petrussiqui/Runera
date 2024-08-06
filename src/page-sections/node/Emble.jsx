import {
  Box,
  Card,
  Fade,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ReferralHistory from "./EmpleTable";
import { FlexBox } from "../../components/flexbox";
import { Pause, PlayArrow, Refresh } from "@mui/icons-material";
import { useState } from "react";

export default function Emble() {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const handleChangeStatus = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <Fade in={true}>
      <Stack gap={4}>
        <Typography fontWeight={600} variant="h2" textAlign={"center"}>
          Run your Emble
        </Typography>
        <Card
          sx={{
            background: theme.palette.background.default,
            p: 2.5,
            gap: 2,
            display: "flex",
            flexDirection: "column",
            borderRadius: "0.5rem",
          }}
        >
          <FlexBox gap={2}>
            <FlexBox
              gap={1}
              onClick={handleChangeStatus}
              sx={{
                cursor: "pointer",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                backgroundColor: isPlaying ? "#B24F4F" : "#20629E",
                "&:hover": {
                  backgroundColor: isPlaying ? "#B24F4FCC" : "#20629ECC",
                },
              }}
            >
              <Typography fontWeight={600}>
                {isPlaying ? "Pause Running Node" : "Start Running"}
              </Typography>
              {isPlaying ? <Pause /> : <PlayArrow />}
            </FlexBox>

            <Box
              onClick={() => {}}
              sx={{
                cursor: "pointer",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                backgroundColor: theme.palette.background.card,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Typography fontWeight={600} color={"primary.main"}>
                Claim Rewards
              </Typography>
            </Box>
            <FlexBox
              onClick={() => {}}
              gap={1}
              sx={{
                cursor: "pointer",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.01)",
                },
                svg: {
                  color: theme.palette.text.secondary,
                },
              }}
            >
              <Refresh />
              <Typography fontWeight={600} color={"text.secondary"}>
                Refresh
              </Typography>
            </FlexBox>
          </FlexBox>
          <Card
            sx={{
              borderRadius: "1rem",
              background: theme.palette.grey[100],
              p: 2,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Grid container spacing={1}>
              <Grid
                xs={12}
                sm={4}
                item
                sx={{
                  paddingLeft: {
                    xs: 0,
                    sm: 2,
                  },
                }}
              >
                <Stack
                  direction={{ xs: "row", sm: "column" }}
                  justifyContent={"space-between"}
                >
                  <Typography color={"#AFAFAF"} fontWeight={600}>
                    Emble Number
                  </Typography>
                  <FlexBox gap={1}>
                    <Box
                      component={"img"}
                      src={"/images/key.svg"}
                      alt=""
                      width={16}
                    />

                    <Typography>2 emble</Typography>
                  </FlexBox>
                </Stack>
              </Grid>
              <Grid
                xs={12}
                sm={4}
                item
                sx={{
                  borderLeft: {
                    xs: "none",
                    sm: `1px solid ${theme.palette.background.card}`,
                  },
                  paddingLeft: {
                    xs: 0,
                    sm: 2,
                  },
                }}
              >
                {" "}
                <Stack
                  direction={{ xs: "row", sm: "column" }}
                  justifyContent={"space-between"}
                >
                  <Typography color={"#AFAFAF"} fontWeight={600}>
                    $RUNES Balance
                  </Typography>
                  <FlexBox gap={1}>
                    <Box
                      component={"img"}
                      src={"/images/RUNES.svg"}
                      alt=""
                      width={16}
                    />

                    <Typography>0.001</Typography>
                  </FlexBox>
                </Stack>
              </Grid>
              <Grid
                xs={12}
                sm={4}
                item
                sx={{
                  borderLeft: {
                    xs: "none",
                    sm: `1px solid ${theme.palette.background.card}`,
                  },

                  paddingLeft: {
                    xs: 0,
                    sm: 2,
                  },
                }}
              >
                <Stack
                  direction={{ xs: "row", sm: "column" }}
                  justifyContent={"space-between"}
                >
                  <Typography color={"#AFAFAF"} fontWeight={600}>
                    $xRUNES Balance
                  </Typography>
                  <FlexBox gap={1}>
                    <Box
                      component={"img"}
                      src={"/images/RUNES.svg"}
                      alt=""
                      width={16}
                    />
                    <Typography>348,288</Typography>
                  </FlexBox>
                </Stack>
              </Grid>
            </Grid>
          </Card>
          <Card
            sx={{
              background: theme.palette.grey[100],
              p: 1.5,
              borderRadius: "1rem",
            }}
          >
            <ReferralHistory />
          </Card>
        </Card>
      </Stack>
    </Fade>
  );
}
