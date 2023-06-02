import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectedYear = (selectedYears) => {
    setFilteredYear(selectedYears);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseItem = <p>No Expense Found.</p>;
  if (filteredExpenses.length > 0) {
    expenseItem =
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
  }
  return (
    <div>
      <Card className="I am bout to cum">
        <ExpensesFilter selected={filteredYear} onYearSave={selectedYear} />
        {expenseItem}
      </Card>
    </div>
  );
};
export default Expenses;
