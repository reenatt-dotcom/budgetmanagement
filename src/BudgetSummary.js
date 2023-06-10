import React, { useState, useEffect } from 'react';

const BudgetSummary = ({ expenses }) => {
  const [totalSpent, setTotalSpent] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(0);

  // Calculate total spent and remaining amount
  useEffect(() => {
    const spent = expenses.reduce((total, expense) => total + expense.amount, 0);
    setTotalSpent(spent);
    setRemainingAmount(-spent);
  }, [expenses]);

  return (
    <div className="budget-summary">
      <h2>Budget Summary</h2>
      <p>Total Budget: $0</p>
      <p>Total Spent: ${totalSpent}</p>
      <p>Remaining Amount: ${remainingAmount}</p>
    </div>
  );
};

export default BudgetSummary;
