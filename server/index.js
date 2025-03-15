// Import required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const ejs = require('ejs');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// Middleware
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});