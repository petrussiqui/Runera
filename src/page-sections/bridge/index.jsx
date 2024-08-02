import {
  ExpandCircleDownOutlined,
  SwapHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Card,
  Fade,
  IconButton,
  OutlinedInput,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { ButtonContained } from "../../components/CustomButton";
import { FlexBetween } from "../../components/flexbox";
import { FlexRow } from "../../components/flexbox/CustomBox";

export default function BridgePageView() {
  const theme = useTheme();
  const [mintAmount, setMintAmount] = useState(1);
  return (
    <Fade in={true}>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Card
          sx={{
            zIndex: 1,
            width: "min(100%, 680px)",
            background: theme.palette.background.default,
            border: `1px solid ${theme.palette.background.card}`,
            p: 3,
          }}>
          <Stack gap={2}>
            <Typography fontWeight={600} variant='h5' fontStyle={"italic"}>
              Runeschain Bridge
            </Typography>

            <FlexBetween
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 0, sm: 2 },
              }}>
              <FlexBetween
                gap={2}
                sx={{
                  width: "100%",
                  p: 2,
                  background: theme.palette.grey[100],
                  borderRadius: "0.5rem",
                }}>
                <FlexRow gap={1}>
                  <Box component={"img"} src={"/images/ETH.svg"} width={36} />
                  <Box>
                    <Typography color={theme.palette.grey[900]}>
                      From
                    </Typography>
                    <Typography color={theme.palette.grey[500]}>
                      Ethereum
                    </Typography>
                  </Box>
                </FlexRow>
                <IconButton sx={{ color: theme.palette.grey[500] }}>
                  <ExpandCircleDownOutlined style={{ fontSize: "2rem" }} />
                </IconButton>
              </FlexBetween>
              <IconButton sx={{ color: theme.palette.grey[500] }}>
                <SwapHorizOutlined style={{ fontSize: "2.5rem" }} />
              </IconButton>
              <FlexBetween
                gap={2}
                sx={{
                  width: "100%",
                  p: 2,
                  background: theme.palette.grey[100],
                  borderRadius: "0.5rem",
                }}>
                <FlexRow gap={1}>
                  <Box component={"img"} src={"/images/ETH.svg"} width={36} />
                  <Box>
                    <Typography color={theme.palette.grey[900]}>
                      From
                    </Typography>
                    <Typography color={theme.palette.grey[500]}>
                      Ethereum
                    </Typography>
                  </Box>
                </FlexRow>

                <IconButton sx={{ color: theme.palette.grey[500] }}>
                  <ExpandCircleDownOutlined style={{ fontSize: "2rem" }} />
                </IconButton>
              </FlexBetween>
            </FlexBetween>
            <FlexBetween
              gap={2}
              sx={{
                px: 2,
                background: theme.palette.grey[100],
                borderRadius: "0.5rem",
              }}>
              <StyledInput
                size='large'
                placeholder='0.00'
                value={mintAmount}
                type={"number"}
                onChange={(e) => setMintAmount(e.target.value)}
                sx={{
                  background: theme.palette.grey[100],
                  color: theme.palette.text.primary,
                }}
              />
              <Stack gap={0.5} py={1}>
                <Typography
                  color={"text.third"}
                  textAlign={"right"}
                  whiteSpace={"nowrap"}>
                  Balance: 0
                </Typography>
                <ButtonContained
                  size='small'
                  sx={{
                    color: "primary.main",
                    background: theme.palette.background.card,
                    "&:hover": {
                      background: theme.palette.background.card,
                    },
                  }}>
                  Max
                </ButtonContained>
              </Stack>
            </FlexBetween>

            <Stack gap={1}>
              <FlexBetween>
                <Typography color={"text.third"}>Bridge fee:</Typography>
                <Typography color={"text.third"}>0.02087 BNB</Typography>
              </FlexBetween>
              <FlexBetween>
                <Typography color={"text.third"}>Address balance:</Typography>
                <Typography color={"text.third"}>0 BNB</Typography>
              </FlexBetween>
              <FlexBetween>
                <Typography color={"text.third"}>
                  Minimum bridge amount:
                </Typography>
                <Typography color={"text.third"}>0 BBTC</Typography>
              </FlexBetween>
              <FlexBetween>
                <Typography color={"text.third"}>
                  Maximum bridge amount:
                </Typography>
                <Typography color={"text.third"}>50 BBTC</Typography>
              </FlexBetween>
            </Stack>
            <ButtonContained
              sx={{ py: 1, fontSize: "1.25rem", borderRadius: "0.4rem" }}>
              Connect Wallet
            </ButtonContained>
          </Stack>
        </Card>
      </Stack>
    </Fade>
  );
}

export const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  input: { fontSize: "1.75rem", fontWeight: 800 },
  "& fieldset": {
    borderRadius: "0.5rem",
    border: `0px solid ${theme.palette.text.disabled} !important`,
  },
  [theme.breakpoints.down("sm")]: {
    input: { fontSize: "1.25rem", fontWeight: 800 },
  },
}));
