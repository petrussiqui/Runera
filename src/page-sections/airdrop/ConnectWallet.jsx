import { Fade, Stack, Typography, useTheme } from "@mui/material";
import { ButtonContained } from "../../components/CustomButton";
import { useState } from "react";

export default function ConnectWallet() {
  const theme = useTheme();
  const [isConnected, setIsConnected] = useState(false);

  const handleClick = () => {
    setIsConnected(!isConnected);
  };
  return (
    <Fade in={true}>
      <Stack alignItems={"center"} mt={4}>
        {isConnected ? (
          <ButtonContained>Connected</ButtonContained>
        ) : (
          <ButtonContained
            sx={{ minWidth: "200px", borderRadius: "0.4rem" }}
            onClick={handleClick}>
            Connect Wallet
          </ButtonContained>
        )}
      </Stack>
    </Fade>
  );
}
