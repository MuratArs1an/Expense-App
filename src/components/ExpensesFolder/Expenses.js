import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from 'react'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredDate, setFilteredDate]=useState('2019')
    const filterHandler=(selectedYear)=>{
        setFilteredDate(selectedYear)
    }

    const filteredList=props.expenses.filter((item)=>{
        return item.date.getFullYear().toString()===filteredDate;
    }
    )


    return (
        <li>
            <Card className="expenses">
            <ExpenseFilter selected={filteredDate} onFiltered={filterHandler} />
            <ExpensesChart expenses={filteredList} />
            <ExpensesList expenses={filteredList} />
            </Card>
        </li>
    );
}

export default Expenses;
