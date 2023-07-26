import React from 'react'
import App from './App'
import Context from './context/Context'
import useValues from './hook/useValues'

const ParentApp = () =>{
    const [
        options, 
        setOptions,
        value, 
        setValue,
        inputValue, 
        setInputValue,
        operators,
        runOnChange
      ] = useValues()
    return(
        <Context.Provider value={{
            options, 
            setOptions,
            value, 
            setValue,
            inputValue, 
            setInputValue,
            operators,
            runOnChange
        }}>
             <App />
        </Context.Provider>
    )
}

export default ParentApp