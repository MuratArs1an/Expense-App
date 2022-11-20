import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import ExpensesAdd from './ExpensesAdd'

function NewExpense(props) {

    const expenseDataHandler=(enteredExpense)=>{
        const savedExpense={
            ...enteredExpense,
            id:Math.random().toString()
        }
        props.onAddExpense(savedExpense)
    }


    return (
    <div className='new-expense'>
        <ExpensesAdd onExpenseData={expenseDataHandler}/>
    </div>
    )
}

export default NewExpense