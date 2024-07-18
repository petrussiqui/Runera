import { LocalOfferOutlined, Speed } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { beginCell } from "@ton/ton";
import {
  TonConnectButton,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import { FlexBetween, FlexRowAlign } from "components/flexbox";
import Modal from "components/modal/Modal";
import { useTelegram } from "contexts/TelegramContext";
import Decimal from "decimal.js";
import { t } from "i18next";
import ProfitIcon from "icons/ProfitIcon";
import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { TypographyGradient } from "../../components/typography";
import useAxios from "../../hooks/useAxios";
import useSettings from "../../hooks/useSettings";
import useUserData from "../../hooks/useUserData";
import BackIcon from "../../icons/BackIcon";
import ThunderFilledIcon from "../../icons/ThunderFilledIcon";

const data = [
  {
    name: "NVIDIA GTX",
    speed: 10,
    chip: "m1",
    period: 30,
    price: 1.5,
    dailyProfit: 0.06912,
    totalProfit: 2.0736,
    paid: 15,
    symbol: "ETH",
    bonus: 1000,
    bonusSymbol: "TAI",
    bonusSymbolIcon: (
      <Avatar src='/images/tai.svg' sx={{ width: 18, height: 18 }} />
    ),
  },
  // {
  //   name: "Apple M1",
  //   speed: 10,
  //   chip: "m1",
  //   period: 30,
  //   price: 1.5,
  //   dailyProfit: 0.06912,
  //   totalProfit: 2.0736,
  //   paid: 15,
  //   symbol: "TON",
  //   bonus: 5000,
  //   bonusSymbol: "TNT",
  //   bonusSymbolIcon: (
  //     <Avatar src='/static/TNT.svg' sx={{ width: 18, height: 18 }} />
  //   ),
  // },
  // {
  //   name: "Apple M2",
  //   speed: 100,
  //   period: 30,
  //   chip: "m2",
  //   price: 15,
  //   dailyProfit: 0.6912,
  //   totalProfit: 20.736,
  //   paid: 15,
  //   symbol: "TON",
  //   bonus: 50000,
  //   bonusSymbol: "TNT",
  //   bonusSymbolIcon: (
  //     <Avatar src='/static/TNT.svg' sx={{ width: 18, height: 18 }} />
  //   ),
  // },
  // {
  //   name: "Apple M3",
  //   speed: 1000,
  //   period: 30,
  //   chip: "m3",
  //   price: 155,
  //   dailyProfit: 6.912,
  //   totalProfit: 207.36,
  //   paid: 155,
  //   symbol: "TON",
  //   bonus: 500000,
  //   bonusSymbol: "TNT",
  //   bonusSymbolIcon: (
  //     <Avatar src='/static/TNT.svg' sx={{ width: 18, height: 18 }} />
  //   ),
  // },
];

export const BoostForm = () => {
  window.Buffer = Buffer;
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { settings } = useSettings();
  const [minerSelected, setMinerSelected] = useState(data[0]);
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();
  const [isLoading, setIsLoading] = useState(false);
  const [miningAmount, setMiningAmount] = useState(1);
  const { callApi } = useAxios();
  const { userData, fetchUserData } = useUserData();

  const { user, webApp } = useTelegram();
  console.log("webApp", webApp.platform);
  const amount = useMemo(() => {
    return new Decimal(minerSelected.price || 0).mul(miningAmount).toNumber();
  }, [minerSelected, miningAmount]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSendTon = useCallback(async () => {
    if (!wallet || !user) return;
    setIsLoading(true);
    try {
      const body = beginCell()
        .storeUint(0, 32) // write 32 zero bits to indicate that a text comment will follow
        .storeStringTail(user.id.toString() + "," + minerSelected.chip) // write our text comment
        .endCell();
      const defaultTx = {
        // The transaction is valid for 10 minutes from now, in unix epoch seconds.
        validUntil: Math.floor(Date.now() / 1000) + 600,
        messages: [
          {
            // The receiver's address.
            address: "UQDRbD44ZMx903yY5XwXJtJGlH4TcaUN6PrS_-s-mOwJFxb2",
            // Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
            amount: new Decimal(amount).mul(Decimal.pow(10, 9)).toFixed(),
            payload: body.toBoc().toString("base64"),
          },

          // Uncomment the following message to send two messages in one transaction.
          /*
              {
                // Note: Funds sent to this address will not be returned back to the sender.
                address: 'UQAuz15H1ZHrZ_psVrAra7HealMIVeFq0wguqlmFno1f3B-m',
                amount: toNano('0.01').toString(),
              }
              */
        ],
      };
      await tonConnectUi.sendTransaction(defaultTx, {
        notifications: "success",
      });

      // await callApi("post", "/user/check-payment", {
      //   amount: new Decimal(amount).mul(Decimal.pow(10, 9)).toFixed(),
      // });
      await fetchUserData();

      toast.success(
        "You have rent miners! Please wait transaction confirmation!",
        {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    } catch (e) {
      toast.error(e?.message, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  }, [amount, wallet, user, minerSelected.chip]);

  return (
    <>
      <LoadingButton
        variant='outlined'
        onClick={handleOpen}
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
      <Modal
        open={open}
        handleClose={handleClose}
        sx={{
          background: theme.palette.background.default,
          minWidth: "100vw",
          borderRadius: "0px !important",
          border: "none !important",
          "& > div": { maxHeight: "calc(100vh)" },
        }}>
        <IconButton
          onClick={() => handleClose()}
          sx={{
            position: "absolute",
            top: 22,
            left: 25,
            background: `${theme.palette.divider} !important`,
            borderRadius: "5px",
            padding: "5px",
          }}>
          <BackIcon size={18} />
        </IconButton>
        <Typography variant='h6' textAlign={"center"} fontWeight={600}>
          {t("Buy a PRO Miner")}
        </Typography>
        <Typography mt={2} textAlign={"center"}>
          {t("Here you can buy PRO Miner")}
        </Typography>
        <Typography fontWeight={600} mb={2} textAlign={"center"}>
          {t("Exclusive access to mine")}{" "}
          <TypographyGradient
            fontWeight={600}
            sx={{ color: theme.palette.primary.main }}
            component={"span"}>
            {" "}
            25% {t("of TONAI's native token $TAI")}
          </TypographyGradient>
        </Typography>

        <FlexRowAlign gap={1}>
          {data.map((item, index) => (
            <StyledButton
              onClick={() => setMinerSelected(item)}
              className={minerSelected.name === item.name ? "active" : ""}
              key={item.name}
              variant='outlined'>
              <FlexRowAlign gap={1}>
                <img src={`/images/gtx.svg`} style={{ height: 44 }} alt='' />
                <Box>
                  <Typography color='text.secondary' fontWeight={600}>
                    {item.name}
                  </Typography>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={0.5}
                    sx={{ svg: { color: theme.palette.warning.main } }}>
                    <ThunderFilledIcon size={13} />
                    <Typography fontSize={"1rem"}>{item.speed} Gh/s</Typography>
                  </Box>
                </Box>
              </FlexRowAlign>
            </StyledButton>
          ))}
        </FlexRowAlign>

        <Stack gap={1.5} my={2}>
          <FlexBetween>
            <Typography color={"text.secondary"}>
              <Speed /> {t("Mining Speed")}
            </Typography>
            <Typography fontWeight={600}>
              {new Decimal(minerSelected?.speed).mul(miningAmount).toNumber()}{" "}
              Gh/s
            </Typography>
          </FlexBetween>
          {/* <FlexBetween>
            <Typography color={"text.secondary"}>
              {t("Rent Period")}
            </Typography>
            <Typography fontWeight={600}>
              {minerSelected?.period} {t("days")}
            </Typography>
          </FlexBetween> */}
          <FlexBetween>
            <Typography color={"text.secondary"}>
              <LocalOfferOutlined /> {t("Rent Price")}
            </Typography>
            <Typography fontWeight={600}>
              {new Decimal(minerSelected?.price).toNumber()}{" "}
              {minerSelected.symbol}
            </Typography>
          </FlexBetween>
          <FlexBetween gap={0.5}>
            <ProfitIcon
              sx={{ color: theme.palette.secondary.main, marginLeft: "-4px" }}
              size={18}
            />
            <Typography
              fontWeight={600}
              width={"100%"}
              color={"secondary.main"}>
              {t("Daily Earnings")}
            </Typography>
            <Typography
              fontWeight={600}
              width={"100%"}
              textAlign={"right"}
              color={"secondary.main"}>
              {new Decimal(minerSelected?.dailyProfit)
                .mul(miningAmount)
                .toNumber()}{" "}
              {minerSelected.bonusSymbol}
            </Typography>
          </FlexBetween>
          {/* <FlexBetween gap={0.5}>
            <ProfitIcon
              sx={{ color: theme.palette.success.main, marginLeft: "-4px" }}
              size={18}
            />
            <Typography fontWeight={600} width={"100%"} color={"success.main"}>
              {t("Total Profit")}
            </Typography>
            <Typography
              fontWeight={600}
              width={"100%"}
              textAlign={"right"}
              color={"success.main"}>
              {new Decimal(minerSelected?.totalProfit)
                .mul(miningAmount)
                .toNumber()}{" "}
              {minerSelected.symbol}
            </Typography>
          </FlexBetween> */}
          <StyledInput
            size='small'
            fullWidth
            placeholder='0'
            value={miningAmount}
            onChange={(e) => setMiningAmount(e.target.value)}
            sx={{
              background: theme.palette.background.input,
              color: theme.palette.text.primary,
            }}
            startAdornment={
              <ButtonBase
                disableRipple
                sx={{ fontSize: "2rem", marginTop: "-5px", fontWeight: 700 }}
                onClick={() =>
                  setMiningAmount(
                    Decimal.max(0, parseInt(miningAmount || 0) - 1),
                  )
                }>
                -
              </ButtonBase>
            }
            endAdornment={
              <ButtonBase
                disableRipple
                sx={{ fontSize: "2rem", marginTop: "-5px", fontWeight: 700 }}
                onClick={() =>
                  setMiningAmount(parseInt(miningAmount || 0) + 1)
                }>
                +
              </ButtonBase>
            }
          />
          <Stack gap={2}>
            <FlexBetween>
              <Typography fontWeight={600}>{t("You pay")}</Typography>
              <Typography fontWeight={600}>
                {new Decimal(minerSelected?.paid).mul(miningAmount).toNumber()}{" "}
                {minerSelected.symbol}
              </Typography>
            </FlexBetween>
            <FlexBetween>
              <Typography>{t("Bonus for PRO Miner owners")}</Typography>
              <FlexRowAlign justifyContent='flex-start' gap={1}>
                {minerSelected.bonusSymbolIcon}
                <TypographyGradient>
                  +
                  {new Decimal(minerSelected?.bonus)
                    .mul(miningAmount)
                    .toNumber()}{" "}
                  {minerSelected.bonusSymbol}
                </TypographyGradient>
              </FlexRowAlign>
            </FlexBetween>
          </Stack>
        </Stack>
        <Box flexGrow={1} height={"100%"} />
        {wallet?.account ? (
          <LoadingButton
            onClick={handleSendTon}
            loading={isLoading}
            fullWidth
            sx={{
              mt: "2rem",
              background: theme.palette.linear.primary,
              borderRadius: "3rem!important",
            }}>
            {t("Sent transaction")}
          </LoadingButton>
        ) : (
          <Box
            sx={{
              button: {
                background: theme.palette.linear.primary,
                borderRadius: "3rem!important",
                color: "#000000!important",
                // svg: { color: "#000000!important" },
                // div: { color: "#000000!important" },
              },
            }}>
            <TonConnectButton />
          </Box>
        )}
      </Modal>
    </>
  );
};

export const StyledButton = styled(Button)(({ theme }) => ({
  border: `1px solid #B4B4B4`,
  background: "#000 !important",
  borderRadius: "0.8rem",
  padding: "1.5rem",
  flexDirection: "column",
  color: theme.palette.text.primary,
  "&.active": {
    border: `1px solid transparent`,
    width: "100%",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      background: theme.palette.linear.secondary,
      inset: "0px",
      zIndex: 1,
      borderRadius: "10px",
      padding: "1px",
      WebkitMask:
        "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box,linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
      WebkitMaskComposite: "xor",
    },
  },
}));

export const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  margin: "1rem 0px",
  input: {
    textAlign: "center",
  },
  "& fieldset": {
    borderRadius: "0.5rem",
    border: `1px solid ${theme.palette.text.disabled} !important`,
  },
}));
