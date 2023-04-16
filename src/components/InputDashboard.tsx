import React, { useEffect } from "react";

import "./Styles.css";

import {
  Alert,
  Box,
  CssBaseline,
  Divider,
  SelectChangeEvent,
  Snackbar,
} from "@mui/material";
import SelectUSState from "./SelectUSState";

import { TextInput } from "./Forms";
import { isValidAddress, isValidEmail, isValidZip } from "../utils/validators";
import Submit from "./Submit";
import { propertyFactory, Property } from "./Property";
import PropertyList from "./PropertyList";

interface FormInputs {
  [x: string]: string;
}

const isFormValid = (inputs: FormInputs): boolean => {
  if (!inputs) return false;
  return (
    !!inputs?.address &&
    !!inputs?.email &&
    !!inputs?.zip &&
    !!inputs?.state &&
    !!inputs?.city
  );
};

const InputDashboard = () => {
  const [didSubmit, setDidSubmit] = React.useState<boolean>(false);
  const [updateError, setUpdateError] = React.useState<boolean>(false);
  const [formInputs, setformInputs] = React.useState<FormInputs>();
  const [properties, setProperties] = React.useState<Property[]>([]);

  const clearError = () => {
    setUpdateError(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.id;
    setformInputs({ ...formInputs, [name]: value });
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    const name = event.target.name;
    setformInputs({ ...formInputs, [name]: value });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLAnchorElement>) => {
    if (isFormValid(formInputs || {})) {
      const property: Property = propertyFactory(formInputs);
      setProperties([...properties, property]);
      setformInputs({});
      setDidSubmit(true);
      console.log(property);
    } else {
      setUpdateError(true);
      console.log("Please fill out all fields");
    }
    console.log("Submit Deal");
  };

  useEffect(() => {
    console.log("didSubmit: ", didSubmit);
    if (didSubmit) {
      setDidSubmit(false);
    }
  }, [didSubmit]);

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
          <Box sx={{ mt: 5 }}>
            <TextInput
              key={props.id}
              didSubmit={didSubmit}
              handleInput={handleChange}
              {...props}
            />
          </Box>
        );
      })}
      <Box sx={{ mt: 5, display: "flex", justifyContent: "space-between" }}>
        <SelectUSState
          sx={{ width: "35%" }}
          onChange={handleSelectChange}
          id="state"
        />
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
        <Submit
          sx={{ mt: 5 }}
          styleProps={{
            borderRadius: 5,
            backgroundColor: "#ffffff",
            padding: "3mm 3mm",
            fontSize: "1em",
            fontWeight: "bold",
          }}
          handleSubmit={handleSubmit}
        />
        <Snackbar
          open={!!updateError}
          autoHideDuration={5000}
          onClose={clearError}
        >
          <Alert onClose={clearError} severity="error" sx={{ width: "100%" }}>
            Please fill out all fields to submit deal
          </Alert>
        </Snackbar>
      </Box>
      <Divider sx={{ marginTop: 4, marginBottom: 4 }} />
      <PropertyList properties={properties} setProperties={setProperties} />
    </Box>
  );
};

export default InputDashboard;
