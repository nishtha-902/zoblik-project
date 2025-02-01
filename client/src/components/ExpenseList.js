import React, { useEffect } from 'react';
import axios from 'axios';

const ExpenseList = ({ expenses, setExpenses }) => {
    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const token = localStorage.getItem('token');
                const { data } = await axios.get('https://zoblik-project-backend.onrender.com/api/expenses', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setExpenses(data);
            } catch (error) {
                console.error("Error fetching expenses:", error);
            }
        };
        fetchExpenses();
    }, [setExpenses]); // Updates when expenses change

    return (
        <ul>
            {expenses.map((expense) => (
                <li key={expense._id}>
                    {expense.amount} - {expense.category} - {expense.description}
                </li>
            ))}
        </ul>
    );
};

export default ExpenseList;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ExpenseList = () => {
//     const [expenses, setExpenses] = useState([]);

//     useEffect(() => {
//         const fetchExpenses = async () => {
//             const token = localStorage.getItem('token');
//             const { data } = await axios.get('https://zoblik-project-backend.onrender.com/api/expenses', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setExpenses(data);
//         };
//         fetchExpenses();
//     }, []);

//     return (
//         <ul>
//             {expenses.map((expense) => (
//                 <li key={expense._id}>
//                     {expense.amount} - {expense.category} - {expense.description}
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default ExpenseList;
