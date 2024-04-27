import React, { useContext, useState } from 'react';
import Select from "react-select";
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencySelected = (event) => {
        setNewCurrency({value: event.target.value});
    };
    return (
        <>
        <Select className="btn btn-success" value={newCurrency} onChange={handleCurrencySelected.bind(this)} 
        options=[
            (value,"1" label:"$ Dollar")
            {value:"2" label:"£ Pound"}
            {value:"3" label:"€ Euro"}
            {value:"3" label:"₹ Ruppee"}
        ];
        />
        </>  
    );
};
export default Currency;