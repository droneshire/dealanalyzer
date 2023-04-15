import React from "react";

import "./styles.css";

import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Divider,
  Checkbox,
  TextField,
  Button,
} from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";

interface TextInputProps {
  title: string;
  text: string;
}

const TextInput = (props: TextInputProps) => {
  return (
    <FormGroup>
      <Typography variant="h6" gutterBottom className="Input-text">
        {props.text}
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
        label={props.title}
        variant="outlined"
      />
    </FormGroup>
  );
};

const InputFields = () => {
  return (
    <Box sx={{ width: "75%" }}>
      <>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TextInput title="Email" text="Email" />
          <Divider sx={{ marginTop: 2, marginBottom: 4 }} />
          <TextInput title="Address" text="Address" />
        </Box>
      </>
    </Box>
  );
};

export default InputFields;
