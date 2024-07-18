import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Box,
  Card,
  Fade,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Iconify from "components/Iconify";
import { FlexBetween, FlexRowAlign } from "components/flexbox";
import { useTelegram } from "contexts/TelegramContext";
import Decimal from "decimal.js";
import { t } from "i18next";
import TNXIcon from "icons/TNXIcon";
import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { TypographyGradient } from "../../components/typography";
import useAxios from "../../hooks/useAxios";
import useSettings from "../../hooks/useSettings";
import useSocket from "../../hooks/useSocket";
import useUserData from "../../hooks/useUserData";
import { fCurrency } from "../../utils/format";
import WithdrawForm from "./WithdrawForm";

export default function Mining() {
  const theme = useTheme();
  const { userData, fetchUserData } = useUserData();
  const [isClaiming, setIsClaiming] = useState(false);
  const { callApi } = useAxios();
  const { settings } = useSettings();

  const tokens = [
    {
      index: 0,
      symbol: "TON",
      symbolIcon: (
        <Iconify
          icon={"token:ton"}
          sx={{
            background: theme.palette.primary.main,
            color: "#fff",
            borderRadius: 50,
            padding: "3px 3px 1px",
          }}
          size={18}
        />
      ),
    },
    {
      index: 1,
      symbol: "TAI",
      symbolIcon: (
        <TNXIcon
          size={18}
          sx={{
            border: "1px solid #000",
            borderRadius: 18,
          }}
        />
      ),
    },
  ];
  const [tokenSelected, setTokenSelected] = useState(tokens[0]);
  const { webApp } = useTelegram();

  const showHashRate = useMemo(() => {
    const amount = new Decimal(
      userData?.userHashRate
        .find((hashRate) => hashRate.token === tokenSelected?.symbol)
        ?.hashRate?.toString() ?? 0,
    ).div(0.0000008);
    return new Decimal(amount).mul(10).toNumber();
  }, [tokenSelected, userData]);

  const hashRate = useMemo(() => {
    if (tokenSelected?.symbol === "TNX") {
      return new Decimal(
        userData?.userHashRate.find(
          (hashRate) => hashRate.token === tokenSelected?.symbol,
        )?.hashRate ?? 0,
      )
        .div(0.0000008)
        .mul(0.005)
        .toNumber();
    } else {
      return (
        userData?.userHashRate.find(
          (hashRate) => hashRate.token === tokenSelected?.symbol,
        )?.hashRate ?? 0
      );
    }
  }, [tokenSelected, userData]);

  const startTime = useMemo(() => {
    return (
      userData?.userHashRate.find(
        (hashRate) => hashRate.token === tokenSelected?.symbol,
      )?.lastUpdate ?? 0
    );
  }, [tokenSelected, userData]);

  const unprocessed = useMemo(() => {
    return (
      userData?.userHashRate.find(
        (hashRate) => hashRate.token === tokenSelected?.symbol,
      )?.unprocessed ?? 0
    );
  }, [tokenSelected, userData]);

  const { on, off } = useSocket();
  const handleEvent = useCallback(async (rentMinner) => {
    await fetchUserData();
    toast.success("Rented PRO miner successfully!", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  useEffect(() => {
    on("RentMinner", handleEvent);
    return () => {
      off("RentMinner", handleEvent);
    };
  }, [handleEvent, off, on, fetchUserData]);

  const claimFunction = async () => {
    if (!settings.token) return;
    setIsClaiming(true);
    try {
      await callApi("post", "/user/claim-minted-token", {
        token: tokenSelected?.symbol === "TON" ? "1" : "2",
      });
      await fetchUserData();
      toast.success("Claim successful!", {
        autoClose: 5000,
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
      setIsClaiming(false);
    }
  };

  return (
    <Fade in={true}>
      <Card
        sx={{
          backgroundColor: "transparent",
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: "0.875rem",
          padding: "1rem 2rem 2rem 2rem",
          boxShadow: "none",
          height: "100%",
        }}>
        <Stack
          sx={{
            position: "relative",
            my: "1rem",
          }}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              padding: { xs: "0rem", sm: "3rem" },
              maxWidth: "500px",
              margin: "0 auto",
            }}>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ position: "relative" }}>
              <img
                src='/images/circle.svg'
                alt=''
                style={{
                  width: "100%",
                }}
              />
            </Stack>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}>
              <Stack alignItems={"center"} gap={1.5}>
                <Stack alignItems={"center"} gap={1}>
                  <Avatar
                    src={"/images/tai-mining.svg"}
                    alt
                    sx={{ width: 30, height: 30 }}
                  />

                  <Typography fontSize={"1.2rem"} fontWeight={400}>
                    TAI {t("Mining")}
                  </Typography>
                  {startTime ? (
                    <MinedCount
                      startTime={startTime}
                      diff={hashRate}
                      unprocessed={unprocessed}
                    />
                  ) : (
                    <Typography
                      fontWeight={400}
                      variant='h2'
                      color={"primary.main"}>
                      0
                    </Typography>
                  )}
                </Stack>
                <Stack
                  sx={{
                    background: "#151515",
                    padding: "0.5rem 1rem",
                    borderRadius: "2rem",
                  }}>
                  <Typography fontSize={"1.2rem"} fontWeight={400}>
                    {t("Hashrate")}:{" "}
                    <Typography variant='span' color={"info.main"}>
                      {showHashRate} Gh/s
                    </Typography>
                  </Typography>
                </Stack>
                <FlexBetween sx={{ gap: "0.75rem" }}>
                  {/* <BoostForm token={tokenSelected} /> */}
                  <LoadingButton
                    variant='outlined'
                    sx={{
                      borderRadius: "3rem",
                      height: "30px",
                      minHeight: "30px",
                      width: 94,
                      color: "#000",
                      background: theme.palette.linear.primary,
                    }}>
                    <Typography fontSize={"1.2rem"} fontWeight={500}>
                      {t("Boost")}
                    </Typography>
                  </LoadingButton>
                  <LoadingButton
                    variant='outlined'
                    loading={isClaiming}
                    onClick={claimFunction}
                    sx={{
                      borderRadius: "3rem",
                      height: "30px",
                      minHeight: "30px",
                      width: 94,
                      position: "relative",
                      border: "none",
                      "&::before": {
                        content: "''",
                        position: "absolute",
                        background: theme.palette.linear.primary,
                        inset: "0px",
                        zIndex: 1,
                        borderRadius: "3rem",
                        padding: "1px",
                        WebkitMask:
                          "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box,linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
                        WebkitMaskComposite: "xor",
                      },
                    }}>
                    <TypographyGradient fontSize={"1.2rem"} fontWeight={500}>
                      {t("Claim")}
                    </TypographyGradient>
                  </LoadingButton>
                </FlexBetween>
              </Stack>
            </Box>
          </Box>
        </Stack>
        <FlexBetween
          sx={{
            maxWidth: "350px",
            margin: "0 auto",
            marginTop: { xs: 0, sm: -4 },
          }}>
          <Card
            sx={{
              width: "100%",
              height: "110px",
              borderEndEndRadius: 0,
              borderStartEndRadius: 0,
              border: `1px solid rgba(255,255,255,0.1)`,
              background: "#15151BCD",
            }}>
            <Stack
              px={1.2}
              py={1.5}
              width={"100%"}
              spacing={0.5}
              alignItems={"center"}>
              <FlexRowAlign justifyContent='flex-start' gap={1}>
                <Avatar
                  src='/images/TON-mining.svg'
                  sx={{ width: 22, height: 22 }}
                />
                <Typography fontWeight={500} color={"text.secondary"}>
                  TON
                </Typography>
              </FlexRowAlign>
              <Stack
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={0.5}>
                <Typography variant='h5' fontWeight={500}>
                  {fCurrency(
                    userData?.userBalances.find(
                      (balance) => balance.token === "TON",
                    )?.balance ?? 0,
                    4,
                  )}
                </Typography>
                <WithdrawForm
                  tokenInfo={{ symbol: "TON", min: 0.4 }}
                  btnSx={{ p: "0.3rem 1rem", with: "100%" }}
                />
              </Stack>
            </Stack>
          </Card>
          <Card
            sx={{
              width: "100%",
              height: "110px",
              borderEndStartRadius: 0,
              borderStartStartRadius: 0,
              border: `1px solid rgb(255,255,255,0.1)`,
              borderLeft: "none",
              background: "#15151BCD",
            }}>
            <Stack
              px={1.2}
              py={1.5}
              width={"100%"}
              height={"100%"}
              justifyContent={"center"}
              spacing={0.5}
              alignItems={"center"}>
              <FlexRowAlign justifyContent='flex-start' gap={1}>
                <Avatar src='/images/tai.svg' sx={{ width: 22, height: 22 }} />
                <Typography fontWeight={500} color={"text.secondary"}>
                  TAI
                </Typography>
              </FlexRowAlign>
              <Stack
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={0.5}>
                <Typography variant='h5' fontWeight={500}>
                  {fCurrency(
                    userData?.userBalances.find(
                      (balance) => balance.token === "TONET",
                    )?.balance ?? 0,
                    4,
                  )}
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </FlexBetween>
        <Box flexGrow={1} />
        <svg width='0' height='0'>
          <defs>
            <clipPath id='clip-path' clipPathUnits='objectBoundingBox'>
              <path
                d='M0.8676,0 C0.9001,0 0.9265,0.1053 0.9265,0.2353 V0.7353 C0.9265,0.8653 0.953,0.9706 0.9853,0.9706 H0.9956 C0.9971,0.9706 1,0.977 1,0.9853 C1,0.9936 0.9971,1 0.9956,1 H0.0044 C0.0029,1 0,0.9936 0,0.9853 C0,0.977 0.0029,0.9706 0.0044,0.9706 H0.0147 C0.047,0.9706 0.0735,0.8653 0.0735,0.7353 V0.2353 C0.0735,0.1053 0.0999,0 0.1324,0 H0.8676 Z'
                fill='#292934'
              />
            </clipPath>
          </defs>
        </svg>
      </Card>
    </Fade>
  );
}

const MinedCount = ({ startTime, diff, unprocessed }) => {
  const theme = useTheme();
  const [mined, setMined] = useState(0);
  useEffect(() => {
    setMined(
      Decimal.mul(
        Decimal.div(Decimal.sub(Date.now().toFixed(), startTime), 1000),
        diff,
      )
        .add(unprocessed)
        .toNumber(),
    );
    const interval = setInterval(() => {
      setMined(
        Decimal.mul(
          Decimal.div(Decimal.sub(Date.now().toFixed(), startTime), 1000),
          diff,
        )
          .add(unprocessed)
          .toNumber(),
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [startTime, diff]);
  return (
    <TypographyGradient
      textAlign={"right"}
      fontWeight={600}
      variant='h4'
      sx={{
        background: theme.palette.linear.secondary,
        WebkitBackgroundClip: "text",
      }}>
      {mined}
    </TypographyGradient>
  );
};
