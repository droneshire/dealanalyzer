import React from "react";

import { Typography, FormGroup, FormControl, TextField } from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";

interface TextInputProps {
  text: string;
  id: string;
  isValid: boolean;
  didSubmit: boolean;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  helperText?: string;
  defaultValue?: string | undefined;
}

const TextInput = (props: TextInputProps) => {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.handleInput(event);
  };

  if (props.didSubmit) {
    setValue("");
  }

  const hasTitle = !!props?.title || false;

  return (
    <FormGroup>
      {hasTitle && (
        <Typography
          variant="h6"
          gutterBottom
          className="Input-text"
          color="text.primary"
        >
          {props.title}
        </Typography>
      )}
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
        defaultValue={props?.defaultValue || ""}
        variant="outlined"
        value={value}
        onChange={handleChange}
        error={!props.isValid}
        helperText={props?.helperText || ""}
      />
    </FormGroup>
  );
};

export { TextInput };
