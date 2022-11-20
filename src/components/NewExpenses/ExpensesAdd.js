import ExpenseForm from "./ExpenseForm"
import {useState} from 'react'

function ExpensesAdd(props) {

    const[buttonClick, setButtonClick]=useState(false)
    const addForm=(evt)=>{
        evt.preventDefault()
        setButtonClick(true)
    }

    const cancelAdd=()=>{
        setButtonClick(false)
    }

    if(buttonClick){
        return (
            <ExpenseForm onCancel={cancelAdd} onExpenseData={props.onExpenseData}/>
            )
    }

    return (
    <div>
        <button onClick={addForm}>Add New Expense</button>
    </div>
    )
}

export default ExpensesAdd