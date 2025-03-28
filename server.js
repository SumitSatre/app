const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Route 1: Home Page
app.get('/', (req, res) => {
    res.send('Hello, welcome to my simple Node.js app!');
});

// Route 2: About Page
app.get('/about', (req, res) => {
    res.send('This is a simple Node.js app deployed using AWS CDK.');
});

app.get('/sumit', (req, res) => {
    res.send('<h1>This is a simple Node.js app deployed using AWS CDK By Sumit Satre. Sumit Satre is a Android developer</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
