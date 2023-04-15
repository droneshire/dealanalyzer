import React from "react";
import Button from "@mui/material/Button";

const Submit: React.FC<any> = (props: any) => {
  return (
    <Button variant="text" color="text.secondary" {...props}>
      Submit Deal
    </Button>
  );
};

export default Submit;
