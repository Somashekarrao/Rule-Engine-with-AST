import React, { useState } from 'react';

function App() {
    const [attributes, setAttributes] = useState({ age: '', department: '', income: '', spend: '' });
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setAttributes({ ...attributes, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/evaluate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(attributes)
        });
        const data = await response.json();
        setResult(data);
    };

    return (
        <div>
            <h1>Rule Engine</h1>
            <form onSubmit={handleSubmit}>
                <input name="age" value={attributes.age} onChange={handleChange} placeholder="Age" />
                <input name="department" value={attributes.department} onChange={handleChange} placeholder="Department" />
                <input name="income" value={attributes.income} onChange={handleChange} placeholder="Income" />
                <input name="spend" value={attributes.spend} onChange={handleChange} placeholder="Spend" />
                <button type="submit">Evaluate</button>
            </form>
            {result !== null && <div>Eligible: {result.toString()}</div>}
        </div>
    );
}

export default App;
