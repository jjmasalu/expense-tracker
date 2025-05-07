import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = (props) => {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext)

  return (
    <div>
      <form>
        <div className="form-control">
            <label htmlFor="text">Transaction details</label>
            <input 
            type="text" 
            id='text'
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder='Enter transaction details...' 
            />
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)
            </label>
            <input 
            type="number" 
            id='amount' 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...' 
            />
            <button 
            className='btn btn-income'
            onClick={(e) => {
                e.preventDefault();
                const amountValue = amount === 0 ? 0 : Math.abs(Number(amount)) 
                addTransaction(text, amountValue);

                setAmount(0)
                setText("")
                }
              }
            >
                Add Income
            </button>

            <button 
            className='btn btn-expense'
            onClick={(e) => {
                e.preventDefault();
                const amountValue = amount === 0 ? 0 : -Math.abs(Number(amount))
                addTransaction(text, amountValue);

                setAmount(0)
                setText("")
                }
              }
            >
                Add Expense
            </button>

            
            <button 
            className='btn btn-cancel' 
            onClick={(e) => {
                e.preventDefault();
                setText("")
                setAmount(0)

            }} >
              Cancel Transaction
            </button>
        </div>
      </form>
    </div>
  )
}

export default AddTransaction
