import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = ({ setExpenses }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const newExpense = { amount, category, description };
            
            // Send new expense to backend
            const { data } = await axios.post(
                'https://zoblik-project-backend.onrender.com/api/expenses',
                newExpense,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // Update local state immediately after adding expense
            setExpenses((prevExpenses) => [...prevExpenses, data]);

            // Reset form
            setAmount('');
            setCategory('');
            setDescription('');
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



// import React, { useState } from 'react';
// import axios from 'axios';

// const AddExpense = () => {
//     const [amount, setAmount] = useState('');
//     const [category, setCategory] = useState('');
//     const [description, setDescription] = useState('');

//     const handleSubmit = async (e) => {
//         try {
//             const token = localStorage.getItem('token');
//             await axios.post(
//                 'https://zoblik-project-backend.onrender.com/api/expenses',
//                 { amount, category, description },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             alert('Expense added!');
//         } catch (error) {
//             alert('Failed to add expense.');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
//             <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
//             <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
//             <button type="submit">Add Expense</button>
//         </form>
//     );
// };

// export default AddExpense;
