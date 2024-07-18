import { LocalOfferOutlined, Speed } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Card,
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
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
import { useTelegram } from "contexts/TelegramContext";
import Decimal from "decimal.js";
import { t } from "i18next";
import ProfitIcon from "icons/ProfitIcon";
import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { TypographyGradient } from "../../components/typography";
import useUserData from "../../hooks/useUserData";

const data = [
  {
    name: "NVIDIA GTX",
    speed: 10,
    chip: "m1",
    period: 30,
    price: 9.9,
    dailyProfit: 1000,
    totalProfit: 2.0736,
    paid: 7,
    symbol: "TON",
    bonus: 1000,
    bonusSymbol: "TAI",
    bonusSymbolIcon: (
      <Avatar src='/images/tai.svg' sx={{ width: 18, height: 18 }} />
    ),
  },
];

export const Boost = () => {
  window.Buffer = Buffer;
  const theme = useTheme();
  const [minerSelected, setMinerSelected] = useState(data[0]);
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();
  const [isLoading, setIsLoading] = useState(false);
  const [miningAmount, setMiningAmount] = useState(1);
  const { userData, fetchUserData } = useUserData();

  const { user, webApp } = useTelegram();
  console.log("webApp", webApp.platform);
  const amount = useMemo(() => {
    return new Decimal(minerSelected.price || 0).mul(miningAmount).toNumber();
  }, [minerSelected, miningAmount]);

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
    <Card
      sx={{
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "0.875rem",
        padding: "2rem",
        boxShadow: "none",
        height: "100%",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          mb: 2,
        }}>
        <Box>
          <Typography variant='h5' fontWeight={600}>
            {t("Purchase PRO Node Boost")}
          </Typography>
          <Typography mt={1}>{t("Here you can buy PRO Miner")}</Typography>
          <Typography mb={2}>
            {t("Exclusive access to mine")}{" "}
            <TypographyGradient
              sx={{ color: theme.palette.primary.main }}
              component={"span"}>
              25% {t("of TONAI's native token $TAI")}
            </TypographyGradient>
          </Typography>
        </Box>

        <img
          src={`/images/gtx.svg`}
          style={{ height: 64, transform: "scaleX(-1)" }}
          alt=''
        />
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <StyledCard>
            <FlexRowAlign gap={0.5}>
              <Speed
                fontSize='small'
                sx={{ color: theme.palette.text.secondary }}
              />
              <Typography color={"text.secondary"}>
                {t("Mining Speed")}
              </Typography>
            </FlexRowAlign>
            <Typography textAlign={"center"}>
              {new Decimal(minerSelected?.speed).mul(miningAmount).toNumber()}{" "}
              Gh/s
            </Typography>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledCard>
            <FlexRowAlign gap={0.5}>
              <LocalOfferOutlined
                fontSize='small'
                sx={{ color: theme.palette.text.secondary }}
              />
              <Typography color={"text.secondary"}>
                {t("Rent Price")}
              </Typography>
            </FlexRowAlign>
            <Typography textAlign={"center"}>
              {new Decimal(minerSelected?.price).toNumber()}{" "}
              {minerSelected.symbol}
            </Typography>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledCard>
            <FlexRowAlign>
              <ProfitIcon
                sx={{ color: theme.palette.secondary.main, marginLeft: "-4px" }}
                size={18}
              />
              <Typography width={"100%"} color={"secondary.main"}>
                {t("Daily Earnings")}
              </Typography>
            </FlexRowAlign>
            <Typography textAlign={"center"} color={"secondary.main"}>
              {new Decimal(minerSelected?.dailyProfit)
                .mul(miningAmount)
                .toNumber()}{" "}
              {minerSelected.bonusSymbol}
            </Typography>
          </StyledCard>
        </Grid>
      </Grid>
      <Stack gap={1.5} my={2}>
        <BuyCard>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Typography color={"text.secondary"} mb={0.5}>
                {t("Select Chain")}
              </Typography>
              <FormControl fullWidth>
                <Select
                  size='small'
                  sx={{
                    background: theme.palette.background.input,
                    color: theme.palette.text.primary,
                    fieldset: { borderRadius: "0.5rem" },
                  }}
                  value={"ARB"}
                  // onChange={handleChange}
                >
                  <MenuItem value={"ARB"}>Arbitrum</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color={"text.secondary"} mb={0.5}>
                {t("Select Token")}
              </Typography>
              <FormControl fullWidth>
                <Select
                  size='small'
                  sx={{
                    background: theme.palette.background.input,
                    color: theme.palette.text.primary,
                    fieldset: { borderRadius: "0.5rem" },
                  }}
                  value={"ETH"}
                  // onChange={handleChange}
                >
                  <MenuItem value={"ETH"}>ETH</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <StyledInput
            size='small'
            fullWidth
            placeholder='0'
            value={miningAmount}
            onChange={(e) => setMiningAmount(e.target.value)}
            sx={{
              background: theme.palette.background.input,
              color: theme.palette.text.primary,
              fontWeight: 700,
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
        </BuyCard>
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
                {new Decimal(minerSelected?.bonus).mul(miningAmount).toNumber()}{" "}
                {minerSelected.bonusSymbol}
              </TypographyGradient>
            </FlexRowAlign>
          </FlexBetween>
        </Stack>
      </Stack>
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
              path: { color: "#000000!important" },
              div: { color: "#000000!important" },
            },
          }}>
          <TonConnectButton />
        </Box>
      )}
    </Card>
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

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  background: "#151515",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1rem",
  },
}));

export const BuyCard = styled(Card)(({ theme }) => ({
  padding: "1rem",
  background: "#151515",
}));
