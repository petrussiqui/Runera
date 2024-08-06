import { Box, Card, Grid, Stack, Typography, useTheme } from "@mui/material";
import { FlexBox } from "../../components/flexbox";
import { ArrowDropDown, ArrowDropUp, Circle } from "@mui/icons-material";

export default function System() {
  const theme = useTheme();
  return (
    <Card
      sx={{
        background: theme.palette.background.default,
        p: 2.5,
      }}
    >
      <Grid container>
        <Grid
          xs={12}
          md={6}
          item
          sx={{
            mb: { xs: 2, md: 0 },
          }}
        >
          <FlexBox gap={1}>
            <Box
              component={"img"}
              src={"/images/icons/icon-chart.svg"}
              alt=""
              width={16}
            />
            <Typography fontWeight={500} color={"text.secondary"}>
              Storage Space
            </Typography>
          </FlexBox>
          <FlexBox gap={2}>
            <Stack gap={1} mt={2}>
              <FlexBox gap={1}>
                <Circle fontSize="small" color="primary" sx={{ mt: 0.5 }} />
                <Box>
                  <Typography fontWeight={600} variant="h6" color={"primary"}>
                    13.70%
                  </Typography>
                  <Typography color={"text.secondary"}>
                    Titan Used Storage Volume
                  </Typography>
                  <Typography fontWeight={600} variant="h6">
                    5848.48 TB
                  </Typography>
                </Box>
              </FlexBox>
              <FlexBox gap={1}>
                <Circle fontSize="small" sx={{ mt: 0.5 }} />
                <Box>
                  <Typography fontWeight={600} variant="h6">
                    86.30%
                  </Typography>
                  <Typography color={"text.secondary"}>
                    Titan Available Storage Volume
                  </Typography>
                  <Typography fontWeight={600} variant="h6">
                    36842.52 TB
                  </Typography>
                </Box>
              </FlexBox>
            </Stack>
          </FlexBox>
        </Grid>
        <Grid
          xs={6}
          sm={6}
          md={3}
          item
          sx={{
            borderLeft: {
              xs: "none",
              md: `1px solid ${theme.palette.background.card}`,
            },
            paddingLeft: {
              xs: 0,
              md: 3,
            },
          }}
        >
          <FlexBox gap={1}>
            <Box
              component={"img"}
              src={"/images/icons/icon-sd-card.svg"}
              alt=""
              width={16}
            />
            <Typography fontWeight={500} color={"text.secondary"}>
              Computing resources
            </Typography>
          </FlexBox>
          <Stack gap={2} mt={3}>
            <FlexBox gap={1.5} alignItems={"center"}>
              <Box
                component={"img"}
                src={"/images/icons/icon-cpu.svg"}
                alt=""
                width={24}
              />
              <Box>
                <Typography color={"text.secondary"}>CPU</Typography>
                <Typography fontWeight={600} variant="h6">
                  392826 Core
                </Typography>
              </Box>
            </FlexBox>
            <FlexBox gap={1.5} alignItems={"center"}>
              <Box
                component={"img"}
                src={"/images/icons/icon-diagram.svg"}
                alt=""
                width={24}
              />
              <Box>
                <Typography color={"text.secondary"}>Ram</Typography>
                <Typography fontWeight={600} variant="h6">
                  1127528.37GB
                </Typography>
              </Box>
            </FlexBox>
          </Stack>
        </Grid>
        <Grid
          xs={6}
          sm={6}
          md={3}
          item
          sx={{
            borderLeft: {
              xs: `1px solid ${theme.palette.background.card}`,
              sm: `1px solid ${theme.palette.background.card}`,
            },

            paddingLeft: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          <FlexBox gap={1}>
            <Box
              component={"img"}
              src={"/images/icons/icon-internet.svg"}
              alt=""
              width={16}
            />
            <Typography fontWeight={500} color={"text.secondary"}>
              Internet resources
            </Typography>
          </FlexBox>
          <Stack gap={1} mt={2}>
            <FlexBox gap={1.5} alignItems={"center"}>
              <Circle fontSize="small" color="primary" />
              <Box>
                <Typography color={"text.secondary"}>Number of IPs</Typography>
                <Typography fontWeight={600} variant="h6">
                  223608
                </Typography>
              </Box>
            </FlexBox>
            <FlexBox gap={1.5} alignItems={"center"}>
              <ArrowDropUp fontSize="medium" />
              <Box>
                <Typography color={"text.secondary"}>Upstream</Typography>
                <Typography fontWeight={600} variant="h6">
                  1286.97 Gbps
                </Typography>
              </Box>
            </FlexBox>
            <FlexBox gap={1.5} alignItems={"center"}>
              <ArrowDropDown fontSize="medium" />
              <Box>
                <Typography color={"text.secondary"}>Downstream</Typography>
                <Typography fontWeight={600} variant="h6">
                  31961.64 Gbps
                </Typography>
              </Box>
            </FlexBox>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
