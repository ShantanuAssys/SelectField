import React, { useState } from 'react'

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

const useValues = () =>{
  const [options, setOptions] = useState(data); // default options for the field
  const [value, setValue] = useState([data[0], data[1], data[2]]); // predefined values
  const [inputValue, setInputValue] = useState('') // variable to handle input values

  const operators = ['+', '-', '*', '/']; // predefined operators

  const runOnChange = (event, newInputValue) =>{
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
    console.log(value)
  }


  return[
    options, 
    setOptions,
    value, 
    setValue,
    inputValue, 
    setInputValue,
    operators,
    runOnChange
  ]
}

export default useValues