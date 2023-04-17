import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Logo from "../Logo";
import DealInput from "../DealInput";
import Copyright from "../Copyright";

const NewDealView = () => {
  return (
    <Box>
      <Logo sx={{ width: "30%" }} />
      <DealInput />
      <Copyright sx={{ mt: 5 }} />
    </Box>
  );
};

export default NewDealView;
