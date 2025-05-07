import React, { useState } from 'react';
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import SubsectionHeader from './SubsectionHeader';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import { GlobalProvider} from '../context/GlobalState';
import '../App.css';

function App() {
  

  return (
    <GlobalProvider className='container'>
     <Header />
     <div className='body-container'>
      <Balance />
      <IncomeExpenses />
      <SubsectionHeader header="History"/>
      <TransactionList />
      
      <SubsectionHeader header="Add a new Transaction" />
      <AddTransaction />
     </div>
     
    </GlobalProvider>
  );
}

export default App;
