

**Expense Tracker**
====================

A simple web application to track your expenses and income.

**Live Demo**
-------------

You can view the live demo of the application at: [https://jjmasalu.github.io/expense-tracker/](https://jjmasalu.github.io/expense-tracker/)

**Getting Started**
-------------------

This project was bootstrapped with Create React App. To get started, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/expense-tracker.git`
2. Install dependencies: `npm install`
3. Start the application: `npm start`
4. Open your browser and navigate to `http://localhost:3000`

**Features**
------------

* Add new transactions with details and amount
* View your balance and transaction history
* Delete transactions
* Filter transactions by income and expenses

**Components**
--------------

* `AddTransaction`: A form to add new transactions
* `Balance`: Displays the current balance
* `IncomeExpenses`: Displays the total income and expenses
* `SubsectionHeader`: A header component for subsections
* `TransactionList`: A list of all transactions
* `Transaction`: A single transaction component

**Context**
------------

The application uses a global context to manage state. The context is defined in `src/context/GlobalState.jsx` and provides the following actions:

* `addTransaction`: Adds a new transaction to the state
* `deleteTransaction`: Deletes a transaction from the state

**Reducer**
------------

The application uses a reducer to manage state changes. The reducer is defined in `src/context/AppReducer.jsx` and handles the following actions:

* `ADD_TRANSACTION`: Adds a new transaction to the state
* `DELETE_TRANSACTION`: Deletes a transaction from the state

**Styles**
------------

The application uses CSS to style components. The styles are defined in `src/App.css`.

**Deployment**
--------------

To deploy the application, run `npm run build` and then `npm run deploy`. This will build the application and deploy it to the `gh-pages` branch.

