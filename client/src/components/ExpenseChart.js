import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ExpenseChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const token = localStorage.getItem('token');
            const { data } = await axios.get('http://localhost:8001/api/expenses', {
                headers: { Authorization: `Bearer ${token}` },
            });

            const aggregatedData = data.reduce((acc, expense) => {
                const category = expense.category;
                acc[category] = (acc[category] || 0) + expense.amount;
                return acc;
            }, {});

            const chartData = Object.keys(aggregatedData).map((key) => ({
                name: key,
                value: aggregatedData[key],
            }));

            setData(chartData);
        };
        fetchExpenses();
    }, []);

    return (
      <>
        <h1>Your Expenses</h1>
        <PieChart className='pie' width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
      </>  
    );
};

export default ExpenseChart;
