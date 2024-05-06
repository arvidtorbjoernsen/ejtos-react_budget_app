import React, { useContext } from 'react';
import Select from "react-select";

import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { dispatch } = useContext(AppContext);
    
    const handleCurrencySelected = (value) => {
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

    return (
        <div className='alert alert-success' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <span>Currency (</span>
            <span>
                <Select
                    styles ={{
                        control: (state) => ({
                            display: 'flex',
                            width: '150px',
                            flexDirection: 'row',
                            backgroundColor: "#D1E7DD",
                            borderColor: state.isFocused ? 'grey' : 'red',
                        }),
                        option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                            ...styles,
                            backgroundColor: isFocused ? "#aaaaaa" : "#D1E7DD",
                            color: "#333333"
                        })
                    }}
                    defaultValue={currencyOptions[1]}
                                
                    options={currencyOptions}
                    
                    onChange={(value) => handleCurrencySelected(value)}
                />
            </span>
            <span>)</span>
        </div>
    );
    
};
export default Currency;