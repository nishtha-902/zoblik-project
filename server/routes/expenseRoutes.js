const express = require('express');
const Expense = require('../models/Expense');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware for authentication
const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Add expense
router.post('/', authenticate, async (req, res) => {
    const { amount, category, description, date } = req.body;
    try {
        const expense = await Expense.create({ userId: req.user.id, amount, category, description, date });
        res.status(201).json(expense);
    } catch (err) {
        res.status(400).json({ error: 'Expense creation failed' });
    }
});

// Get expenses
router.get('/', authenticate, async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user.id });
        res.json(expenses);
    } catch (err) {
        res.status(400).json({ error: 'Could not fetch expenses' });
    }
});

// Delete expense
router.delete('/:id', authenticate, async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.json({ message: 'Expense deleted' });
    } catch {
        res.status(400).json({ error: 'Delete failed' });
    }
});
module.exports = router;
