import React from "react";

import "./Styles.css";

import { Box, CssBaseline, Divider } from "@mui/material";

import { TextInput, TextInputWithTitle } from "./Forms";
import SelectUSState from "./SelectUSState";

const StateZip = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <CssBaseline />
      <div className="Dropdown">
        <SelectUSState
          className="Dropdown"
          onChange={(state) => console.log("New state: %s", state)}
          id="state"
        />
      </div>
      <TextInput text="Zip" />
    </Box>
  );
};

const InputFields = () => {
  return (
    <Box sx={{ width: "75%" }}>
      <CssBaseline />
      <TextInput text="Email" />
      <Divider sx={{ marginTop: 2, marginBottom: 4 }} />
      <TextInputWithTitle title="Property Details" text="Address" />
      <TextInput text="Address 2" />
      <TextInput text="City" />
      <StateZip />
    </Box>
  );
};

export default InputFields;
