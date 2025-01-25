import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = () => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(
                'https://zoblik-project-backend.onrender.com/api/expenses',
                { amount, category, description },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert('Expense added!');
        } catch (error) {
            alert('Failed to add expense.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default AddExpense;
