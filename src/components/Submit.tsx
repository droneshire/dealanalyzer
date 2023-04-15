import React from "react";
import Button from "@mui/material/Button";

const Submit: React.FC<any> = (props: any) => {
  const handleClick = () => {
    console.log("Submit button clicked");
  };
  return (
    <Button onClick={handleClick} variant="text" color="primary" {...props}>
      Submit Deal
    </Button>
  );
};

export default Submit;
