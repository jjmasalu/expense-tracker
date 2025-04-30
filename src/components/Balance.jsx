import React, { useState } from 'react'


const Balance = (props) => {
    const [balance, setBalance] = useState(0.00);

    function calculateBalance(balanceChange) {
        setBalance(prevBalance => {
            return prevBalance + balanceChange;
        })
    }

    return (
        <div className="balance">
            <h4 id='balance-header'>Your Balance:</h4>
            <h1 id='balance-amount'>${balance}</h1>
        </div>
      )
}

export default Balance;
