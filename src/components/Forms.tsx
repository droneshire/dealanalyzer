import React from "react";

import { Typography, FormGroup, TextField } from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";

interface TextInputProps {
  text: string;
  id: string;
  isValid: boolean;
  helperText: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextInputWithTitleProps extends TextInputProps {
  title: string;
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
        id={props.id}
        label={props.text}
        variant="outlined"
        onChange={props.handleInput}
        error={!props.isValid}
        helperText={props.helperText}
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
        id={props.id}
        label={props.text}
        variant="outlined"
        onChange={props.handleInput}
        error={!props.isValid}
        helperText={props.helperText}
      />
    </FormGroup>
  );
};

export { TextInputWithTitle, TextInput };
