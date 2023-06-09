import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';
import { useState } from "react";



const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // method3 -filter using if condition
    // let expenseContent = <p>No expense Found.</p>;

    // if(filteredExpenses.length > 0) {
    //     expenseContent = filteredExpenses.map((expense)=>(
    //         <ExpenseItem
    //         key={expense.id}
    //         title={expense.title}
    //         amount={expense.amount}
    //         date={expense.date}
    //         />
    //     )); 
    // }


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                {/* {expenseContent} */}
                <ExpensesList items={filteredExpenses} />

                {/* conditional content */}
                {/* method -2 using && symbol - it splits stand alone */}
                {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
                {filteredExpenses.length > 0 && 
                filteredExpenses.map((expense)=>(
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                )) 
                } */}

                {/*method-1  using ternary operator - it gives one condition */}
                {/* {filteredExpenses.length === 0 ? (
                <p>No Expenses Found</p>
                ): (
                    filteredExpenses.map((expense)=>(
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                )) 
                )} */}


                {/* rendering list- map func  */}
                
            
            
            {/* <ExpenseItem 
                title={props.items[0].title} 
                amount={props.items[0].amount} 
                date={props.items[0].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.items[1].title} 
                amount={props.items[1].amount} 
                date={props.items[1].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.items[2].title} 
                amount={props.items[2].amount} 
                date={props.items[2].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.items[3].title} 
                amount={props.items[3].amount} 
                date={props.items[3].date}>
            </ExpenseItem> */}
       </Card> 

        </div>
       
    );
};

export default Expenses;