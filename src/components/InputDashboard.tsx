import React from "react";

import "./Styles.css";

import { Box, CssBaseline, Divider } from "@mui/material";
import SelectUSState from "./SelectUSState";

import { TextInput } from "./Forms";
import { isValidAddress, isValidEmail, isValidZip } from "../utils/validators";
import Submit from "./Submit";
import { propertyFactory, Property } from "./Property";
import PropertyList from "./PropertyList";

interface FormInputs {
  [x: string]: string;
}

const InputDashboard = () => {
  const [didSubmit, setDidSubmit] = React.useState<boolean>(false);
  const [formInputs, setformInputs] = React.useState<FormInputs>();
  const [properties, setProperties] = React.useState<Property[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.id;
    setformInputs({ ...formInputs, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const name = event.target.id;
    setformInputs({ ...formInputs, [name]: value });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLAnchorElement>) => {
    if (!!formInputs?.address) {
      const property: Property = propertyFactory(formInputs);
      setProperties([...properties, property]);
      setformInputs({});
      setDidSubmit(true);
      console.log(property);
    }
    console.log("Button Submit");
  };

  const addressInputTextProps = [
    {
      id: "email",
      text: "Email",
      title: "",
      isValid: isValidEmail(formInputs?.email || ""),
      helperText: !isValidEmail(formInputs?.email || "")
        ? "Please enter a valid email"
        : "",
    },
    {
      id: "address",
      title: "Property Details",
      text: "Address",
      isValid: isValidAddress(formInputs?.address || ""),
      helperText: !isValidAddress(formInputs?.address || "")
        ? "Please enter a valid address"
        : "",
    },
    {
      id: "address2",
      text: "Address 2",
      isValid: !!formInputs?.address2,
      helperText: !formInputs?.address2 ? "Additional address information" : "",
    },
    {
      id: "city",
      text: "City",
      isValid: !!formInputs?.city,
      helperText: !formInputs?.city ? "Please enter city" : "",
    },
  ];

  return (
    <Box sx={{ width: "75%" }}>
      <CssBaseline />
      {addressInputTextProps.map((props) => {
        return (
          <TextInput
            {...props}
            didSubmit={didSubmit}
            handleInput={handleChange}
          />
        );
      })}
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
          didSubmit={didSubmit}
          handleInput={handleChange}
          isValid={isValidZip(formInputs?.zipcode || "")}
          helperText="Enter a valid zip code"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Submit sx={{ mt: 5 }} handleSubmit={handleSubmit} />
      </Box>
      <Divider sx={{ marginTop: 4, marginBottom: 4 }} />
      <PropertyList properties={properties} setProperties={setProperties} />
    </Box>
  );
};

export default InputDashboard;
