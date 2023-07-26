import React, { useContext } from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useValues from "./hook/useValues";
import Context from "./context/Context";

const defaultOptions = [
  {
    type: "Variable",
    def: { key: "Cost A", value: 447 },
    type: "Variable",
    def: { key: "Cost B", value: 446 },
    type: "Variable",
    def: { key: "Cost C", value: 444 },
    type: "Variable",
    def: { key: "Cost D", value: 440 },
  },
];

// Default Data
const data = [
  {
    type: "Variable",
    def: { key: "Cost A", value: 446 },
  },
  {
    type: "Operator",
    def: "+",
  },
  {
    type: "Value",
    def: 23,
  },
  {
    type: "Variable",
    def: { key: "Cost B", value: 446 },
  },
  {
    type: "Variable",
    def: { key: "Cost C", value: 444 },
  },
  {
    type: "Variable",
    def: { key: "Cost D", value: 440 },
  },
];

const optionLabelExtractor = (option) => {
  if (option.type === "Variable") {
    return option.def.key;
  } else {
    return option.def;
  }
};
const renderTags = (tagValue, getTagProps) => {
  return tagValue.map((option, index) =>
    option.type === "Variable" ? (
      <Chip // Chips to render selected option
        label={option.def.key}
        {...getTagProps({ index })}
      />
    ) : (
      <span>{` ${option.def}`}</span>
    )
  );
};

const filterOption = (options) =>{
    return options.filter((o) => o.type === "Variable")
}

const renderInput = (params) => (
  <TextField
    {...params}
    variant="standard"
    label="Multiple values"
    placeholder="Add here"
  />
);

function Select({ onBlurCal }) {
  const {
    options,
    value,
    setValue,
    inputValue,
    runOnChange,
  } = useContext(Context)
  const onSelectionChange = (event, data) => {
    setValue([...data]); // updating state on selection, But some how showing error when adding input, not a blocker
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200",
      }}
    >
      <div style={{ width: "400px" }}>
        <div>
          <Autocomplete
            multiple
            freeSolo
            openOnFocus={false}
            noOptionsText={""}
            options={options}
            getOptionLabel={optionLabelExtractor}
            value={value}
            inputValue={inputValue}
            onInputChange={runOnChange}
            onChange={onSelectionChange}
            disableClearable
            filterOptions={filterOption}
            renderTags={renderTags}
            renderInput={renderInput}
          />
        </div>
      </div>
    </div>
  );
}

export default Select;

 