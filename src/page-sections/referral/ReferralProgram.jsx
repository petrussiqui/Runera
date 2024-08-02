import {
  Box,
  Card,
  Fade,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useCallback, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { ButtonContained } from "../../components/CustomButton";
import { FlexBetween } from "../../components/flexbox/CustomBox";
import ReferralHistory from "./ReferralHistory";
import Modal from "../../components/modal/Modal";

export default function ReferralProgram() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClaim = useCallback(
    (token) => () => {
      handleOpen();
    },
    [],
  );
  const handleCopy = () => {
    toast.success("Copied");
  };
  return (
    <Fade in={true}>
      <Stack alignItems={"center"} gap={4}>
        <Box
          sx={{
            width: 80,
            padding: "0.5rem 1rem",
            backgroundColor: theme.palette.background.card,
          }}>
          <Typography textAlign={"center"} color={theme.palette.primary[900]}>
            Node
          </Typography>
        </Box>
        <Typography fontWeight={600} textAlign={"center"} variant='h3'>
          Runera referral program
        </Typography>
        <Box width={"100%"}>
          <Grid container spacing={{ xs: 2 }}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={{ xs: 2 }}>
                <Grid item xs={12} md={6}>
                  <Card
                    sx={{
                      background: theme.palette.background.default,
                      p: 2.5,
                      gap: 1,
                      height: "100%",
                    }}>
                    <Typography color={"text.third"}>Your invite</Typography>
                    <Typography fontWeight={600} variant='h6'>
                      0
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card
                    sx={{
                      background: theme.palette.background.default,
                      p: 2.5,
                      height: "100%",
                    }}>
                    <Typography color={"text.third"}>
                      Total Commission Rewards
                    </Typography>
                    <Typography fontWeight={600} variant='h6'>
                      0 USD
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card
                    sx={{
                      background: theme.palette.background.default,
                      p: 2.5,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                    }}>
                    <Typography color={"text.third"}>
                      Your Commission Rewards
                    </Typography>
                    <FlexBetween>
                      <Typography fontWeight={600} variant='h6'>
                        0 ETH
                      </Typography>
                      <ButtonContained
                        size='small'
                        onClick={handleClaim("ETH")}>
                        Claim
                      </ButtonContained>
                    </FlexBetween>
                    <FlexBetween>
                      <Typography fontWeight={600} variant='h6'>
                        0 BNB
                      </Typography>
                      <ButtonContained
                        size='small'
                        onClick={handleClaim("BNB")}>
                        Claim
                      </ButtonContained>
                    </FlexBetween>
                    <FlexBetween>
                      <Typography fontWeight={600} variant='h6'>
                        0 USDT
                      </Typography>
                      <ButtonContained
                        size='small'
                        onClick={handleClaim("USDT")}>
                        Claim
                      </ButtonContained>
                    </FlexBetween>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card
                    sx={{
                      background: theme.palette.background.default,
                      p: 2.5,
                    }}>
                    <Typography color={"text.third"}>
                      Your referral link
                    </Typography>
                    <FlexBetween
                      sx={{
                        mt: 0.5,
                        p: 1,
                        border: "1px solid",
                        borderColor: theme.palette.background.card,
                        borderRadius: "0.875rem",
                        background: "#000",
                      }}>
                      <Link
                        href='https://linkpresale.sale/node-sale/TEB0UY2T5N'
                        color={theme.palette.primary.main}>
                        linkpresale.sale/node-sale/TEB0UY2T5N
                      </Link>
                      <CopyToClipboard
                        text={`https://linkpresale.sale/node-sale/TEB0UY2T5N`}
                        onCopy={handleCopy}>
                        <ButtonContained size='small'>Copy</ButtonContained>
                      </CopyToClipboard>
                    </FlexBetween>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  background: theme.palette.background.default,
                  p: 2.5,
                  height: "100%",
                }}>
                <Typography variant='h6' fontWeight={600}>
                  History
                </Typography>
                <ReferralHistory />
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Modal open={open} handleClose={handleClose}>
          <Stack gap={2} alignItems={"center"}>
            <Box
              component={"img"}
              src={"/images/icon-message.svg"}
              width={52}
            />
            <Typography>Claim Successfully</Typography>
            <Typography>
              Your claim has been successfully processed. Thank you for your
              patience. If you have any further questions or need additional
              assistance, please contact our support team.
            </Typography>
            <ButtonContained onClick={handleClose} size='small' fullWidth>
              OK
            </ButtonContained>
          </Stack>
        </Modal>
      </Stack>
    </Fade>
  );
}
