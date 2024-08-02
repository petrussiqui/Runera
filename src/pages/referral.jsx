import { Fade, Stack } from "@mui/material";
import { useState } from "react";
import LoginWith from "../page-sections/referral/LoginWith";
import ReferralProgram from "../page-sections/referral/ReferralProgram";

export default function Referral() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Fade in={true}>
      <Stack gap={5} pb={10}>
        {!isLogin ? (
          <LoginWith onLogin={() => setIsLogin(true)} />
        ) : (
          <ReferralProgram />
        )}
      </Stack>
    </Fade>
  );
}
