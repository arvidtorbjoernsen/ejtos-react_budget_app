
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, remaining, currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (remaining <= 0) {
            alert("You cannot reduce the budget value lower than the spending")
            return
        }
        setNewBudget(event.target.value)
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    };

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency.value}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};

export default Budget;