import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

//(state)

function ExpenseItem(props) {
    // const[title, setTitle] = useState(props.title);
    // console.log('ExpenseItem evaluated by React');
    
    // const clickHandler = () => {
    //     setTitle('Updated');
    //     console.log('title');
    // };
    
    return(
        <li>
        <card className='expense-item'>
            {/* adding normal JS */}
            <ExpenseDate date={props.date}></ExpenseDate>
            


            {/* <div>{props.date.toISOString()}</div> */}
            <div className="expense-item__description">
                {/* <h2>{title}</h2> */}
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
           
            
        </card>
        </li>
    );
};

//(passing data via props)

// function ExpenseItem(props) {

//     const clickHandler = () => {
//         console.log('clicked!!!!!');
//     };
    
//     return(
//         <card className='expense-item'>
//             {/* adding normal JS */}
//             <ExpenseDate date={props.date}></ExpenseDate>
            


//             {/* <div>{props.date.toISOString()}</div> */}
//             <div className="expense-item__description">
//                 <h2>{props.title}</h2>
//                 <div className="expense-item__price">${props.amount}</div>
//             </div>
//             <button onClick ={clickHandler}>Change Title</button>
            
//         </card>
//     );
// }




//(dynamic function)

// function ExpenseItem() {
//     return(
//         <div className='expense-item'>
//             <div>March 28th 2021</div>
//             <div className="expense-item__description">
//                 <h2>Car Insurance</h2>
//                 <div className="expense-item__price">$294.67</div>
//             </div>
            
//         </div>
//     );
// }
export default ExpenseItem;