import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [enteredInput, setEnteredInput] = useState(
  //   {
  //     enteredTitle:"",
  //     enteredAmount:"",
  //     enteredDate:"",
  //   }
  // );
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value.length);
    // setEnteredInput(
    //   {
    //     ...enteredInput,
    //     enteredTitle: event.target.value,
    //   }
    // );
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setEnteredInput(
    //   {
    //     ...enteredInput,
    //     enteredAmount: event.target.value,
    //   }
    // );
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setEnteredInput(
    //   {
    //     ...enteredInput,
    //     enteredDate: event.target.value,
    //   }
    // );
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSave(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2026-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
