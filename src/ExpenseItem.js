import React from 'react';

const ExpenseItem = ({ expense, deleteExpense }) => {
  const { id, name, amount } = expense;

  return (
    <li className="expense-item">
      <div className="expense-info">
        <span className="expense-name">{name}</span>
        <span className="expense-amount">${amount}</span>
      </div>
      <button className="delete-button" onClick={() => deleteExpense(id)}>
        Delete
      </button>
    </li>
  );
};

export default ExpenseItem;
