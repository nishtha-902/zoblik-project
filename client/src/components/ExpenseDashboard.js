import React from 'react';
import AddExpense from './AddExpense';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import { useNavigate } from 'react-router-dom';

const ExpenseDashboard = () => {
    const navigate= useNavigate()

    const handleLogout = () => {
        // Remove JWT token from localStorage
        localStorage.removeItem('authToken');
        
        // Redirect to welcome or login page
        navigate('/welcome');  // Adjust the redirect path as needed
    };
    return (
    <div className='dash'>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
        <div>
        <h1>Expense Dashboard</h1>
        <AddExpense />
        <ExpenseList />
        </div>
        <div className='chart'>
        <ExpenseChart />
        </div>

    </div>
    )
};

export default ExpenseDashboard;
