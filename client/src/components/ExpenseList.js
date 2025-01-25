import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const token = localStorage.getItem('token');
            const { data } = await axios.get('http://localhost:8001/api/expenses', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setExpenses(data);
        };
        fetchExpenses();
    }, []);

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
