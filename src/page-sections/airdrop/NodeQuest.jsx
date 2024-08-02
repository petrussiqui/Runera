import { ArrowOutward } from "@mui/icons-material";
import {
  Fade,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "../../components/flexbox/FlexBetween";
import { ClaimedBox, QuestItemBox, QuestTypeBox } from "./styled";
const nodeQuestList = [
  {
    title: "Connect your Twitter account",
    point: "+150 XP",
    status: false,
    isClaim: false,
  },
  {
    title: "Connect your Twitter account",
    point: "+150 XP",
    status: false,
    isClaim: false,
  },
  {
    title: "Connect your Twitter account",
    point: "+150 XP",
    status: true,
    isClaim: false,
  },
  {
    title: "Connect your Twitter account",
    point: "+150 XP",
    status: false,
    isClaim: false,
  },
  {
    title: "Connect your Twitter account",
    point: "+150 XP",
    status: true,
    isClaim: true,
  },
  {
    title: "Connect your Twitter account",
    point: "+150 XP",
    status: false,
    isClaim: false,
  },
  {
    title: "Connect your Twitter account",
    point: "+150 XP",
    status: true,
    isClaim: false,
  },
  {
    title: "Connect your Twitter account",
    point: "+150 XP",
    status: false,
    isClaim: false,
  },
  {
    title: "Connect your Twitter account",
    point: "+150 XP",
    status: true,
    isClaim: true,
  },
];
export default function NodeQuest() {
  const theme = useTheme();
  return (
    <Fade in={true}>
      <Stack gap={2}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {nodeQuestList.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <QuestItemBox>
                <Typography>{item.title}</Typography>
                <FlexBetween width={"100%"}>
                  <QuestTypeBox>
                    <Typography color={"text.secondary"}>
                      {item.point}
                    </Typography>
                  </QuestTypeBox>
                  {item.status ? (
                    item.isClaim ? (
                      <ClaimedBox sx={{ background: "#5A5A5A" }}>
                        <Typography color={"text.secondary"}>
                          Claimed
                        </Typography>
                      </ClaimedBox>
                    ) : (
                      <ClaimedBox
                        sx={{ background: theme.palette.primary.main }}>
                        <Typography
                          sx={{ color: theme.palette.background.paper }}>
                          Claimed
                        </Typography>
                      </ClaimedBox>
                    )
                  ) : (
                    <IconButton
                      sx={{
                        background: theme.palette.primary.main,
                        color: theme.palette.background.paper,
                        padding: "4px",
                        "&:hover": {
                          background: theme.palette.background.paper,
                          color: theme.palette.text.primary,
                        },
                      }}>
                      <ArrowOutward />
                    </IconButton>
                  )}
                </FlexBetween>
              </QuestItemBox>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Fade>
  );
}
