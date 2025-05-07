import React from 'react'

const AppReducer = (state, action) => {
  switch(action.type) {
    case "DELETE_TRANSACTION":
        return{
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
    case 'ADD_TRANSACTION':
        
        // Add a transaction or create a new one if none exist
        const newTransaction = {
            id: state.transactions.length > 0 ? state.transactions.length + 1 : 1,
            text: action.text,
            amount: action.amount
        }
        return {transactions: [...state.transactions, newTransaction]}
    default:
        return state;
  }
}

export default AppReducer;
