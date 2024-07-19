const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

let todos = [];
let nextId = 1;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));

// Routes
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const { text } = req.body;
    const newTodo = { id: nextId++, text };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const todo = todos.find(t => t.id === parseInt(id));
    if (todo) {
        todo.text = text;
        res.json(todo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(t => t.id !== parseInt(id));
    res.status(204).end();
});

// Serve the HTML file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
