import {
  Avatar,
  Card,
  IconButton,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { FlexBetween, FlexRowAlign } from "components/flexbox";
import { t } from "i18next";
import CheckedIcon from "icons/CheckedIcon";
import CopyIcon from "icons/CopyIcon";
import ShareIcon from "icons/ShareIcon";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { TypographyGradient } from "../../components/typography";
import useUserData from "../../hooks/useUserData";

export default function Referral() {
  const theme = useTheme();
  const handleCopy = (text) => {
    toast.success(t("Copied"));
  };
  const { userData, fetchUserData } = useUserData();
  console.log("userData", userData);

  const quests = [
    {
      title: t("Each friend is invited to TonAI Mini App"),
      bonuses: [
        {
          bonus: 0.005,
          symbol: "TON",
          symbolIcon: (
            <Avatar src='/images/TON.svg' sx={{ width: 18, height: 18 }} />
          ),
          color: theme.palette.text.primary,
        },
        {
          bonus: 10,
          symbol: "TNX",
          symbolIcon: (
            <Avatar src='/images/TNX.svg' sx={{ width: 18, height: 18 }} />
          ),
          color: theme.palette.primary.main,
        },
      ],
      status: "PENDING",
    },
    {
      title: t("Each boost is purchased by a friend"),
      bonuses: [
        {
          bonus: 1,
          symbol: "TON",
          symbolIcon: (
            <Avatar src='/images/TON.svg' sx={{ width: 18, height: 18 }} />
          ),
          color: theme.palette.text.primary,
        },
        {
          bonus: 1000,
          symbol: "TNX",
          symbolIcon: (
            <Avatar src='/images/TNX.svg' sx={{ width: 18, height: 18 }} />
          ),
          color: theme.palette.primary.main,
        },
      ],
      status: "PENDING",
    },
    // {
    //   title: t("Each mission is completed by a friend"),
    //   bonuses: [
    //     {
    //       bonus: 30,
    //       symbol: "TNT",
    //       symbolIcon: (
    //         <Avatar src='/images/TNT.svg' sx={{ width: 18, height: 18 }} />
    //       ),
    //       color: theme.palette.primary.main,
    //     },
    //   ],
    //   status: "PENDING",
    // },
  ];
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "0.875rem",
        padding: "2rem",
        boxShadow: "none",
        height: "100%",
      }}>
      <Stack spacing={1} position={"relative"} zIndex={10}>
        <Typography variant='h4' fontWeight={700}>
          {t("Referral Program")}
        </Typography>
        <Typography pb={2} color={"text.secondary"}>
          {t(
            "The more friends you invite, the more rewards you earn. Earn bonuses when your friends rent boosts or complete tasks.",
          )}
        </Typography>
        <Card
          sx={{
            p: 0,
            pr: 1.5,
            background: "none",
            border: `1px solid #373F42`,
          }}>
          <FlexBetween gap={1}>
            <Stack p={1} px={1.7} width={"100%"}>
              <Typography color={"text.secondary"}>
                {t("Invite link")}
              </Typography>
              <Typography maxWidth={{ xs: 150, md: 200 }} variant='h6' noWrap>
                {`https://t.me/TONET_app_bot${userData?.user?.refCode ? `?start=${userData?.user?.refCode}` : ""}`}
              </Typography>
            </Stack>
            <CopyToClipboard
              text={`https://t.me/TONET_app_bot${userData?.user?.refCode ? `?start=${userData?.user?.refCode}` : ""}`}
              onCopy={() => handleCopy()}>
              <IconButton
                sx={{
                  background: `#1E2329`,
                  borderRadius: "5px",
                }}>
                <CopyIcon
                  sx={{ color: theme.palette.text.primary }}
                  size={18}
                />
              </IconButton>
            </CopyToClipboard>
            <IconButton
              sx={{
                background: `#1E2329`,
                borderRadius: "5px",
              }}>
              <ShareIcon sx={{ color: theme.palette.text.primary }} size={18} />
            </IconButton>
          </FlexBetween>
        </Card>
        <Stack pt={3} spacing={1.5}>
          {quests.map((item) => (
            <Card
              sx={{ p: 0, pr: 1.5, background: theme.palette.background.card }}
              key={item.title}>
              <FlexBetween
                sx={{
                  px: 1,
                  py: 1.5,
                }}>
                <Stack pl={1}>
                  <Typography
                    mb={1}
                    variant='h6'
                    color={
                      item.status === "DONE" ? "text.secondary" : "text.primary"
                    }>
                    {item.title}
                  </Typography>
                  <FlexRowAlign gap={1} justifyContent='flex-start'>
                    {item.bonuses.map((bonus) => (
                      <FlexRowAlign gap={0.5}>
                        {bonus.symbolIcon}
                        <TypographyGradient
                          sx={{ color: bonus.color }}
                          fontWeight={600}>
                          +{bonus.bonus} {bonus.symbol}
                        </TypographyGradient>
                      </FlexRowAlign>
                    ))}
                  </FlexRowAlign>
                </Stack>
                {item.status === "DONE" ? (
                  <FlexRowAlign gap={1}>
                    <Typography sx={{ color: theme.palette.success.main }}>
                      {t("Done")}
                    </Typography>
                    <CheckedIcon
                      size={20}
                      sx={{ color: theme.palette.success.main }}
                    />
                  </FlexRowAlign>
                ) : (
                  ""
                )}
              </FlexBetween>
            </Card>
          ))}
        </Stack>
        {/* <InvitedList /> */}
      </Stack>
    </Card>
  );
}

const QuestContainer = styled(Stack)(({ theme }) => ({
  margin: "auto",
  minHeight: "calc(100vh - 70px)",
  boxShadow: `0px 0px 10px rgba(0,0,0,0.2)`,
  padding: "1rem",
  position: "relative",
  background: theme.palette.background.default,
}));
