import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(t => t.amount);

  const incomes = amounts.filter(amount => amount>0) //incomes array
  const expenses = amounts.filter(amount => amount<0) // expenses array

  const income = incomes.length > 0 ? incomes.reduce((acc, curr) => curr + acc) : 0;
  const expense = expenses.length > 0 ? expenses.reduce((acc, curr) => curr + acc) : 0;
  
  


  return (
    <div className='income-expenses-container'>
      <div className="income">
        <h4>Income</h4>
        <p>${income}</p>
      </div>
      <div className="divider"></div>
      <div className="expenses">
        <h4>Expenses</h4>
        <p>${Math.abs(expense)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses;
