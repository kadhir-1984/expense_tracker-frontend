import React, { useState } from 'react';
import './AddExpense.css';

const AddExpense = () => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
  });

  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('All');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(formData.amount),
    };
    setExpenses([newExpense, ...expenses]);
    setFormData({ title: '', amount: '', category: '' });
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const total = expenses
    .filter((exp) => filter === 'All' || exp.category === filter)
    .reduce((sum, exp) => sum + exp.amount, 0);

  const filteredExpenses =
    filter === 'All'
      ? expenses
      : expenses.filter((exp) => exp.category === filter);

  const uniqueCategories = ['All', ...new Set(expenses.map((e) => e.category))];

  return (
    <div className="add-expense">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit} className="expense-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (₹)"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
      </form>

      <div className="expense-filter">
        <label>Filter by Category: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="expense-list">
        <h3>Total: ₹{total.toFixed(2)}</h3>
        {filteredExpenses.length === 0 ? (
          <p style={{ color: '#888', fontStyle: 'italic' }}>
            {filter === 'All'
              ? 'No expenses yet. Start adding!'
              : `No expenses found for '${filter}' category.`}
          </p>
        ) : (
          <ul>
            {filteredExpenses.map((exp) => (
              <li key={exp.id} className="expense-item">
                <span>
                  ₹{exp.amount} - <strong>{exp.title}</strong> ({exp.category})
                </span>
                <button
                  onClick={() => handleDelete(exp.id)}
                  className="delete-btn"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddExpense;
