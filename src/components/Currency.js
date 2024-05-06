import React, { useContext, useState } from 'react';
import Select from "react-select";

import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    
    const handleCurrencySelected = (value) => {
        setNewCurrency(value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    };

    const currencyOptions = [
        { value: "$", label: "$ Dollar" },
        { value: "£", label: "£ Pound" },
        { value: "€", label: "€ Euro" },
        { value: "₹", label: "₹ Ruppee" }
      ];

      const currencyStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          // const color = chroma(data.color);
          console.log({ data, isDisabled, isFocused, isSelected });
          return {
            ...styles,
            backgroundColor: isFocused ? "#999999" : null,
            color: "#333333"
          };
        }
      };  

    
    return (
        <Select className='alert alert-success'
            defaultValue={currencyOptions[1]}
            label="Single select"
            options={currencyOptions}
            styles={currencyStyles}
            onChange={(value) => handleCurrencySelected(value)}
  />
        
    );
    
};
export default Currency;