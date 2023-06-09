import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpenses.css';

const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);

    };

    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };

    return(
        <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
        // <div className="new-expense">
        //     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        //     {/* (onsave expense data -new prop) */}

        // </div>
    )
}

export default NewExpenses;