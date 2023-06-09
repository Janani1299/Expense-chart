import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
const[enteredTitle, setEnteredTitle] = useState('');
const[enteredAmount, setEnteredAmount] = useState('');
const[enteredDate, setEnteredDate] = useState('');

//instead of using multiple states
// const [userInput, setUserInput]= useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:''
// })

    const titleChangeHandler = (event) => {
        //single state instead of using multiple state
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // });

        //depend on prev state
        // setUserInput((prevState)=>{
        //     return{...prevState, enteredTitle:event.target.value};
        // })


        setEnteredTitle(event.target.value);

        // console.log(event.target.value);
        // console.log(event);
    };


    // const titleChangeHandler = () => {
    //     console.log('title changed!!');
    // }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // });

    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // });

    };

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        };
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        //two way binding - clear the inputs data
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='Date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm;