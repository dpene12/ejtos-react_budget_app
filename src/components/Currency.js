import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {


        dispatch({ 
            type: "CHG_CURRENCY",
            payload: event.target.value,
        });
    }

    const currencylabel = () => {
        switch (currency) {
            case "$":
              return "$ Dollar";
            case "£":
              return "£ Pound";
            case "€":
              return "€ Euro";
            case "₹":
              return "₹ Ruppee";
            default:
              return "";
          }
    }
    return (<div class="dropdown">
    <button class="dropbtn">Currency {currencylabel()} </button>
    <div class="dropdown-content">
      <button> 
      $ Dollar
      </button>
    </div>
  </div>);

}
export default Currency;
