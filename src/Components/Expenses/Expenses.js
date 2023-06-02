import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearSave={selectedYear} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
