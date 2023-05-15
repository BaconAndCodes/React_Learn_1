import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from './Card';
function Expenses(props){
  return (
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
  )
}
export default Expenses;