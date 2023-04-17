import React from "react";

import "./Styles.css";
import { Box } from "@mui/material";

const Logo = (props: any) => {
  // create a box container component with the logo image
  return (
    <Box alignItems="center" justifyContent="center" {...props}>
      <img
        className="Logo-logo"
        src="ecf_logo.png"
        alt="Engineered Cash Flow LLC"
      />
    </Box>
  );
};

export default Logo;
