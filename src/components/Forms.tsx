import React from "react";

import { Typography, FormGroup, TextField } from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";

interface TextInputWithTitleProps {
  title: string;
  text: string;
}

interface TextInputProps {
  text: string;
}

const TextInputWithTitle = (props: TextInputWithTitleProps) => {
  return (
    <FormGroup>
      <Typography
        variant="h6"
        gutterBottom
        className="Input-text"
        color="text.primary"
      >
        {props.title}
      </Typography>
      <TextField
        sx={{ input: { color: "white" } }}
        InputLabelProps={{
          sx: {
            color: "white",
            [`&.${inputLabelClasses.shrink}`]: {
              color: "grey",
            },
          },
        }}
        id="outlined-basic"
        label={props.text}
        variant="outlined"
      />
    </FormGroup>
  );
};

const TextInput = (props: TextInputProps) => {
  return (
    <FormGroup>
      <TextField
        sx={{ mt: 5, input: { color: "white" } }}
        InputLabelProps={{
          sx: {
            color: "white",
            [`&.${inputLabelClasses.shrink}`]: {
              color: "grey",
            },
          },
        }}
        id="outlined-basic"
        label={props.text}
        variant="outlined"
      />
    </FormGroup>
  );
};

export { TextInputWithTitle, TextInput };
