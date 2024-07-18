import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Link,
  OutlinedInput,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { FlexBetween } from "components/flexbox";
import Modal from "components/modal/Modal";
import { Decimal } from "decimal.js";
import { Form, FormikProvider, useFormik } from "formik";
import { t } from "i18next";
import { useState } from "react";
import toast from "react-hot-toast";
import TonWeb from "tonweb";
import * as Yup from "yup";
import { TypographyGradient } from "../../components/typography";
import useAxios from "../../hooks/useAxios";
import useUserData from "../../hooks/useUserData";
import { fCurrency } from "../../utils/format";

const NoticeBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  position: "relative",
  "&::before": {
    content: "''",
    position: "absolute",
    background: theme.palette.linear.primary,
    inset: "0px",
    zIndex: 1,
    borderRadius: "10px",
    padding: "1px",
    WebkitMask:
      "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box,linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
    WebkitMaskComposite: "xor",
  },
}));

const WithdrawForm = ({ tokenInfo, btnSx }) => {
  const { callApi } = useAxios();
  const { userData } = useUserData();
  const { symbol, min } = tokenInfo;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const Schema = Yup.object().shape({
    amount: Yup.number().required(),
    address: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      amount: "",
      address: "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        const isValid = isValidTonAddress(values.address);
        if (!isValid) {
          toast.error("🎉 Wallet is not valid.", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }
        await callApi("post", "/user/withdraw-request", {
          token: symbol === "TON" ? "1" : "3",
          amount: new Decimal(values.amount).toFixed(),
          address: values.address,
        });
        toast.success(
          "🎉 You have successfully requested a withdrawal. Please wait for the blockchain to process the transaction.",
          {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );
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
        setIsSubmitting(false);
      }
    },
  });
  function isValidTonAddress(address) {
    try {
      const tonweb = new TonWeb();
      const parsedAddress = new tonweb.utils.Address(address);
      return true;
    } catch (error) {
      console.log("error", error);
      return false;
    }
  }

  const { handleSubmit, getFieldProps, errors, touched, handleReset, values } =
    formik;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleFillMax = (value) => {
    formik.setFieldValue("amount", value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { balance } =
    userData?.userBalances.find((balance) => balance.token === symbol) || {};

  return (
    tokenInfo && (
      <>
        <Button
          variant='contained'
          sx={{
            ...btnSx,
            minHeight: 10,
            background: theme.palette.background.input,
            ":hover": {
              background: theme.palette.background.input,
            },
          }}
          onClick={handleOpen}>
          <TypographyGradient>{t("Withdraw")}</TypographyGradient>
        </Button>
        <Modal open={open} handleClose={handleClose}>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit}>
              <Typography variant='h6' textAlign={"center"} fontWeight={700}>
                {t("Withdraw")} {symbol}
              </Typography>
              <Typography textAlign={"center"}>
                {t(
                  "Enter {{symbol}} wallet address to receive your earning",
                ).replace("{{symbol}}", symbol)}
              </Typography>
              <Stack spacing={1.5} py={2}>
                {balance > 0 && (
                  <Typography color={"text.secondary"}>
                    {t("Available")}: {fCurrency(balance, 4)}
                  </Typography>
                )}
                <OutlinedInput
                  sx={{ background: theme.palette.background.input }}
                  type='number'
                  placeholder={t("Enter amount of {{symbol}} here").replace(
                    "{{symbol}}",
                    symbol,
                  )}
                  size='small'
                  fullWidth
                  endAdornment={
                    balance > 0 && (
                      <Link
                        onClick={() =>
                          handleFillMax(fCurrency(balance, 4).replace(/,/g, ""))
                        }>
                        {t("Max")}
                      </Link>
                    )
                  }
                  {...getFieldProps("amount")}
                  error={Boolean(errors.amount) && Boolean(touched.amount)}
                  helperText={Boolean(touched.amount) && errors.amount}
                />
                <OutlinedInput
                  sx={{ background: theme.palette.background.input }}
                  placeholder={t("{{symbol}} wallet address").replace(
                    "{{symbol}}",
                    symbol,
                  )}
                  size='small'
                  fullWidth
                  {...getFieldProps("address")}
                  error={Boolean(errors.address) && Boolean(touched.address)}
                  helperText={Boolean(touched.address) && errors.address}
                />
              </Stack>
              <Typography mb={1} color={"text.secondary"} textAlign={"center"}>
                <i>
                  {" "}
                  {t("Minimum amount")}: {min} {symbol}
                </i>
              </Typography>
              <NoticeBox
                display={"flex"}
                justifyContent={"center"}
                gap={2}
                mt={2}
                mb={3}
                alignItems={"center"}>
                <Box component={"img"} src='/images/star-4.svg' />
                <Typography textAlign={"center"}>
                  {t("We recommend using personal {{symbol}} wallet").replace(
                    "{{symbol}}",
                    symbol,
                  )}
                </Typography>
              </NoticeBox>
              <FlexBetween gap={2}>
                <Button
                  onClick={handleClose}
                  fullWidth
                  variant='contained'
                  color='secondary'
                  sx={{
                    borderRadius: 30,
                    background: "#292934",
                  }}>
                  <Typography fontWeight={500}>{t("Cancel")}</Typography>
                </Button>
                <LoadingButton
                  onClick={handleSubmit}
                  loading={isSubmitting}
                  fullWidth
                  variant='contained'
                  sx={{
                    borderRadius: 30,
                    background: theme.palette.linear.primary,
                  }}
                  color='primary'>
                  <Typography fontWeight={500} sx={{ color: "#000" }}>
                    {t("Confirm")}
                  </Typography>
                </LoadingButton>
              </FlexBetween>
            </Form>
          </FormikProvider>
        </Modal>
      </>
    )
  );
};

export default WithdrawForm;
