import React, { useEffect } from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const defaultOptions = [
    {
        type: "Variable",
        def: { key: "Cost A",
        value: 447},
        type: "Variable",
        def: { key: "Cost B",
        value: 446},
        type: "Variable",
        def: { key: "Cost C",
        value: 444},
        type: "Variable",
        def: { key: "Cost D",
        value: 440},
    }
]

// Default Data
const data = 
    [
        {
            type: "Variable",
            def: { key: "Cost A",
            value: 446},
        }, 
        {
            type: "Operator",
            def: "+",
        }, {
            type: "Value",
            def: 23
        },
        { 
            type: "Variable",
            def: { key: "Cost B",
            value: 446
        }},
        { 
            type: "Variable",
            def: { key: "Cost C",
           value: 444
        }},
        { 
            type: "Variable",
            def: { key: "Cost D",
            value: 440
        },},
      
    ]

function Select() {
 
  const [options, setOptions] = React.useState(data); // default options for the field
  const [value, setValue] = React.useState([data[0], data[1], data[2]]); // predefined values
  const [inputValue, setInputValue] = React.useState('') // variable to handle input values

  const operators = ['+', '-', '*', '/'];

  return (
    <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'200'
    }}>
    <div style={{width:'400px'}}>
        <div>
            <Autocomplete
                multiple
                freeSolo
                options={options}
                getOptionLabel={(option) =>{
                    if(option.def.key){
                        return option.def.key
                    }else{
                        return option.def
                    }
                }}
                value={value}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    const input = event.target.value;
                    const checkIfOperator = operators.some((e) =>{ // is input value is an operator
                        return e === input[input.length - 1]
                    })
                    if(checkIfOperator === true){
                        const i = input.split(''); 
                        const pop = i.pop();
                        setValue([...value, {key:'Operator', def:pop}]) // Adding operators in the data
                        if(i.length !== 0){
                        const joinInput = i.join('')
                        setValue([...value, {key:'Value', def:joinInput}]) // Adding remaining Input in the data
                        setInputValue('') // Removing input from state after add
                        }
                    }else{
                        setInputValue(newInputValue);
                    }
                }}
                onChange={(event, data) =>{
                   setValue([...data]) // updating state on selection, But some how showing error when adding input, not a blocker
                }}
                disableClearable
                renderTags={(tagValue, getTagProps) =>{
                   return tagValue.map((option, index) => {
                     return (
                        <>
                        {option.type === 'Variable' ?
                         <Chip  // Chips to render selected option
                         label={option.def.key}
                         {...getTagProps({ index })}
                       />
                       : 
                       <span>{` ${ option.def}`}</span>
                         }
                        </>
                     )
                   })
                }
                  }
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Multiple values"
                    placeholder="Add here"
                    onChange
                />
                )}
            />
        </div>
    </div>

  
    </div>
  );
}

export default Select

 