import { MenuItem } from "@mui/material";
import React from "react";
import { SelectorField } from "../styled/Styled";

const DecimalSelector = (props) => {
  return (
    <SelectorField
      id="outlined-select-decimal"
      select
      label={props.label}
      value={props.value}
      onChange={props.handleChange}
    >
      {props.options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </SelectorField>
  );
};

export default DecimalSelector;
