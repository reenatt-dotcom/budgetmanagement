import React, { useState } from 'react';
import BudgetSummary from './BudgetSummary';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
import './App.css'

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Function to delete an expense
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="app">
      <h1>Budget Management App</h1>
      <BudgetSummary expenses={expenses} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
};

export default App;
