import React from "react";

import "./Styles.css";

import { Box, CssBaseline, Divider } from "@mui/material";
import SelectUSState from "./SelectUSState";

import { TextInput, TextInputWithTitle } from "./Forms";
import { isValidAddress, isValidEmail, isValidZip } from "../utils/validators";
import Submit from "./Submit";
import { propertyFactory, Property } from "./Property";

interface FormInputs {
  [x: string]: string;
}

const InputDashboard = () => {
  const [formInputs, setformInputs] = React.useState<FormInputs>();
  const [properties, setProperties] = React.useState<Property[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.id;
    setformInputs({ ...formInputs, [name]: value });
    console.log(formInputs, name, value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const name = event.target.id;
    setformInputs({ ...formInputs, [name]: value });
    console.log(formInputs, name, value);
  };

  const handleSubmit = () => {
    if (formInputs) {
      const property: Property = propertyFactory(formInputs);
      setProperties([...properties, property]);
      console.log(property);
    }
    console.log("Button Submit");
  };

  return (
    <Box sx={{ width: "75%" }}>
      <CssBaseline />
      <TextInput
        id="email"
        text="Email"
        handleInput={handleChange}
        isValid={isValidEmail(formInputs?.email || "")}
        helperText={
          isValidEmail(formInputs?.email || "")
            ? "Please enter a valid email"
            : ""
        }
      />
      <Divider sx={{ marginTop: 2, marginBottom: 4 }} />
      <TextInputWithTitle
        id="address"
        title="Property Details"
        text="Address"
        handleInput={handleChange}
        isValid={isValidAddress(formInputs?.address || "")}
        helperText={
          isValidAddress(formInputs?.address || "")
            ? "Please enter a valid address"
            : ""
        }
      />
      <TextInput
        id="address2"
        text="Address 2"
        handleInput={handleChange}
        isValid={true}
        helperText="Additional address information"
      />
      <TextInput
        id="city"
        text="City"
        handleInput={handleChange}
        isValid={true}
        helperText="Enter the city name"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <div className="Dropdown">
          <SelectUSState
            className="Dropdown"
            onChange={handleSelectChange}
            id="state"
          />
        </div>
        <TextInput
          id="zipcode"
          text="Zip"
          handleInput={handleChange}
          isValid={isValidZip(formInputs?.zipcode || "")}
          helperText="Enter a valid zip code"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Submit sx={{ mt: 5 }} handleClick={handleSubmit} />
      </Box>
    </Box>
  );
};

export default InputDashboard;
