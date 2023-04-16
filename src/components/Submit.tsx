import React from "react";
import Button from "@mui/material/Button";
import "./Styles.css";

const Submit: React.FC<any> = (props: any) => {
  const { handleSubmit, ...additionalProps } = props;
  return (
    <Button
      onClick={handleSubmit}
      variant="text"
      color="secondary"
      style={{
        borderRadius: 25,
        backgroundColor: "#ffffff",
        padding: "3mm 3mm",
        fontSize: "1em",
        fontWeight: "bold",
      }}
      {...additionalProps}
    >
      Submit Deal
    </Button>
  );
};

export default Submit;
