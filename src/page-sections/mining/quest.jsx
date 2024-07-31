import {
  Avatar,
  Box,
  Card,
  IconButton,
  Modal,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { ArrowRightIcon } from "@mui/x-date-pickers";
import Iconify from "components/Iconify";
import { FlexBetween, FlexRowAlign } from "components/flexbox";
import { t } from "i18next";
import CheckedIcon from "icons/CheckedIcon";
import useAxios from "../../hooks/useAxios";
import useSettings from "../../hooks/useSettings";
import useSocket from "../../hooks/useSocket";
import useUserQuest from "../../hooks/useUserQuest";
import { LoadingButton } from "@mui/lab";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useUserData from "../../hooks/useUserData";
import { useTonWallet, TonConnectButton } from "@tonconnect/ui-react";
import { TypographyGradient } from "../../components/typography";

export default function Quest() {
  const theme = useTheme();
  const { callApi } = useAxios();
  const { userQuest, fetchUserQuest } = useUserQuest();
  const { userData, fetchUserData } = useUserData();
  const wallet = useTonWallet();

  const [isDoing, setIsDoing] = useState({});
  const [isVerifying, setIsVerifying] = useState({});
  const [isOpenConnectPopUp, setIsOpenConnectPopUp] = useState(false);

  const quests = userQuest ?? [];
  const connectQuest = quests.find((q) => q.id == 1);

  useEffect(() => {
    console.log(connectQuest?.isDone, wallet);
    if (connectQuest?.isDone == false && wallet) {
      (async () => {
        if (wallet) {
          try {
            await callApi("post", "/user/sucess-quest", {
              questId: 1,
            });
            await fetchUserQuest();
            await fetchUserData();
            toast.success("🎉 Quest Completed", {
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } catch (error) {
            if (error.response && error.response.status === 400) {
              toast.error(`Error: ${error.response.data.message}`, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else {
              toast.error("An unexpected error occurred.", {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          }
        }
      })();
      setIsOpenConnectPopUp(false);
    }
  }, [wallet, connectQuest]);

  useEffect(() => {
    if (!userQuest) return;
    const isDoingTemp = {};
    const isVerifyingTemp = {};

    quests.forEach((_, index) => {
      isDoingTemp[index] = false;
      isVerifyingTemp[index] = false;
    });
    setIsDoing(isDoingTemp);
    setIsVerifying(isVerifyingTemp);
  }, [userQuest]);
  const handleDoQuest = async (item, index) => {
    if (item.id == 1 && item.isDone == false) {
      setIsOpenConnectPopUp(true);
    } else if (
      item.isDone == false &&
      !!item.hyperLink &&
      isDoing[index] == false
    ) {
      window.open(item.hyperLink, "_blank");
      setIsDoing((prevState) => ({
        ...prevState,
        [index]: true,
      }));
    }
  };
  const handleVerifyQuest = async (item, index) => {
    setIsVerifying((prevState) => ({
      ...prevState,
      [index]: true,
    }));
    try {
      await callApi("post", "/user/sucess-quest", {
        questId: index + 1,
      });
      await fetchUserQuest();
      await fetchUserData();
      toast.success("🎉 Quest Completed", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(`Error: ${error.response.data.message}`, {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("An unexpected error occurred.", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } finally {
      setIsVerifying((prevState) => ({
        ...prevState,
        [index]: false,
      }));
    }
  };

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
      <ConnectWalletPopup
        openConnectQuest={isOpenConnectPopUp}
        closeConnectQuest={() => setIsOpenConnectPopUp(false)}
      />
      <Typography variant='h4' fontWeight={700}>
        {t("Quests")}
      </Typography>
      <Typography pb={2} color={"text.secondary"}>
        {t("Complete all tasks below to earn TAI & TON")}
      </Typography>
      <Stack gap={1}>
        {quests.map((item, index) => (
          <Card
            onClick={() => handleDoQuest(item, index)}
            sx={{ p: 0, background: theme.palette.background.card }}
            key={item.name}>
            <FlexBetween
              gap={1}
              sx={{
                px: 2,
                py: 1.5,
              }}>
              <Typography
                color={
                  item.isDone === true ? "text.secondary" : "text.primary"
                }>
                {item.name}
              </Typography>
              <Box flexGrow={1} />
              {item.isDone === true ? (
                <>
                  <CheckedIcon
                    size={17}
                    sx={{ color: theme.palette.text.secondary, opacity: 0.7 }}
                  />
                  <Typography sx={{ color: theme.palette.text.secondary }}>
                    {item.notAmount}
                  </Typography>
                </>
              ) : (
                <>
                  {!!item.hyperLink && isDoing[index] == false ? (
                    ""
                  ) : (
                    <>
                      {!!item.hyperLink && isDoing[index] == true ? (
                        <FlexRowAlign gap={1}>
                          <LoadingButton
                            loading={isVerifying[index]}
                            onClick={() => handleVerifyQuest(item, index)}
                            fullWidth
                            variant='outlined'
                            sx={{ height: 25, minHeight: 25, paddingY: 0 }}>
                            <Typography>{"Verify"}</Typography>
                          </LoadingButton>
                        </FlexRowAlign>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                  <TypographyGradient
                    sx={{ color: theme.palette.primary.main }}>
                    {item.notAmount}
                  </TypographyGradient>
                </>
              )}

              <Avatar
                src='/images/ton-token.svg'
                sx={{ width: 20, height: 20 }}
              />
            </FlexBetween>
          </Card>
        ))}
      </Stack>
    </Card>
  );
}

const ConnectWalletPopup = ({ openConnectQuest, closeConnectQuest }) => {
  const theme = useTheme();
  return (
    <>
      <Modal
        open={openConnectQuest}
        sx={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClose={closeConnectQuest}>
        <Stack
          p={2}
          sx={{
            background: theme.palette.background.default,
            borderRadius: "0.7rem",
            maxWidth: 400,
            minHeight: 200,
            width: "100%",
            border: `1px solid ${theme.palette.divider}`,
            position: "relative",
          }}>
          <IconButton
            onClick={closeConnectQuest}
            sx={{ position: "absolute", top: 3, right: 3 }}>
            <Iconify icon={"ic:round-close"} size={25} />
          </IconButton>
          <Iconify
            icon='solar:wallet-2-bold-duotone'
            size={40}
            sx={{ margin: "auto", opacity: 0.3 }}
          />
          <Typography
            variant='h5'
            textAlign={"center"}
            color={"text.secondary"}>
            {t("Please connect wallet")}
          </Typography>
          <TonConnectButton />
        </Stack>
      </Modal>
    </>
  );
};

const QuestContainer = styled(Stack)(({ theme }) => ({
  margin: "auto",
  minHeight: "calc(100vh - 70px)",
  boxShadow: `0px 0px 10px rgba(0,0,0,0.2)`,
  padding: "1rem",
}));
