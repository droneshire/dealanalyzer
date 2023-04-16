import React, { FC } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import states from "./data/states.json";

const SelectUSState: FC<any> = (props: any) => {
  const { id, onChange, ...otherProps } = props;

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event);
  };

  return (
    <Select
      id={id}
      onChange={handleChange}
      defaultValue="Select a State"
      label="State"
      {...otherProps}
    >
      <MenuItem key="Default" value="Select a State">
        Select a State
      </MenuItem>
      {states.map((item) => (
        <MenuItem key={item.abbreviation} value={item.abbreviation}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectUSState;
