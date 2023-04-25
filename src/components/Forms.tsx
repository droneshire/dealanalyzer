import { useState, useRef, useEffect, useCallback, ChangeEvent } from "react";

import { Typography, FormGroup, TextField } from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";

interface TextInputProps {
  text: string;
  id: string;
  isValid: boolean;
  submit: number;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  helperText?: string;
  defaultValue?: string | undefined;
}

const TextInput = (props: TextInputProps) => {
  const [value, setValue] = useState<string>("");
  const [isDefault, setIsDefault] = useState<boolean>(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDefault(false);
    setValue(event.target.value);
    props.handleInput(event);
  };

  useEffect(() => {
    if (props.submit !== 0 && !isDefault) {
      setValue("");
      setIsDefault(true);
    }
  }, [props.submit]);

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
        variant="outlined"
        value={value}
        onChange={handleChange}
        error={!props.isValid && !isDefault}
        helperText={!props.isValid && !isDefault ? props?.helperText || "" : ""}
      />
    </FormGroup>
  );
};

export { TextInput };
