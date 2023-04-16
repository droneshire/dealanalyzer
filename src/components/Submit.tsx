import React from "react";
import Button from "@mui/material/Button";
import "./Styles.css";

const Submit: React.FC<any> = (props: any) => {
  const { styleProps, handleSubmit, ...additionalProps } = props;
  return (
    <Button
      onClick={handleSubmit}
      variant="text"
      color="secondary"
      style={styleProps}
      {...additionalProps}
    >
      Submit Deal
    </Button>
  );
};

export default Submit;
