import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const selectedYear = (selectedYears) => {
    setFilteredYear(selectedYears);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearSave={selectedYear} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
