import React,{useState} from "react";
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import './Expenses.css'
import Card from '../UI/Card';
const Expenses = (props) =>{
  const [filteredYear, setFilteredYear] = useState('2022');
  const selectedYear = (selectedYears) => {
    
    setFilteredYear(selectedYears)
  }
  return (
    <div>
      <ExpensesFilter selected={filteredYear} onYearSave={selectedYear} />
    <Card className='expenses'>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
    </Card>
    </div>
  )
}
export default Expenses;