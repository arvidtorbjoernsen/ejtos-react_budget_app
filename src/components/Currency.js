import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Dropdown } from 'bootstrap';
const Currency = () => {
    const { currency } = useContext(AppContext);
    
    return (
        <div className='alert alert-success'>
            <Dropdown>{currency}</Dropdown>
        </div>
    );
};
export default Currency;