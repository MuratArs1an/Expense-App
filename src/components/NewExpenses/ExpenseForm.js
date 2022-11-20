import {useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

    const[title, setTitle]=useState('');
    const titleHandler=(event)=>{
        setTitle(event.target.value)
    }

    const[amount, setAmount]=useState('');
    const amountHandler=(event)=>{
        setAmount(event.target.value)
    }

    const[date, setDate]=useState('');
    const dateHandler=(event)=>{
        setDate(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault()

        const expenseData={
            title:title,
            amount: +amount,
            date:new Date(date)
        }
        props.onExpenseData(expenseData)
        setTitle('');
        setAmount('');
        setDate('')
        props.onCancel()
    }

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'onChange={titleHandler} value={title} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'onChange={amountHandler} value={amount} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2024-12-31'onChange={dateHandler} value={date} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    )
}

export default ExpenseForm