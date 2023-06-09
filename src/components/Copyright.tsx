import React, { FC } from "react";
import { Typography, Link } from "@mui/material";

const Copyright: FC<any> = (props: any) => {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      {"Copyright © "}
      <Link
        color="inherit"
        component="a"
        target="_blank"
        href="https://engineeredcashflow.com/"
      >
        Engineered Cashflow
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
