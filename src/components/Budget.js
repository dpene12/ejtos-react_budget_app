import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
      }, 0);
    const handleBudgetChange = (event) => {
        if(newBudget > 20000) {
            alert("The Budget Can Not Exceed 20000");
            setNewBudget(20000);
            return;
        }
        if(newBudget < totalExpenses) {
            alert("The Budget Can Not Be Lower Than"+ currency + totalExpenses);
            setNewBudget(2000);
            return;
        }
        setNewBudget(event.target.value);
        dispatch({
            type: "SET_BUDGET",
            payload: event.target.value,
          });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input></span>
</div>
    );
};
export default Budget;
