import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';



const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    
    const amounts = transactions.map(t => t.amount);
    console.log(amounts)
    const balance = amounts.reduce((total, acc) => total+acc, 0);

    const sign = balance < 0 ? "-$" : "+$";


    return (
        <div className="balance">
            <h4 id='balance-header'>Your Balance:</h4>
            <h2 id='balance-amount'>{sign}{Math.abs(balance)}</h2>
        </div>
      )
}

export default Balance;
