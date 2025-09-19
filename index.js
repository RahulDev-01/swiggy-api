const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())
// Serve static files explicitly using absolute paths (important for serverless)
const publicDir = path.join(__dirname, 'public');
app.use('/images', express.static(path.join(publicDir, 'images'), {
    maxAge: '7d',
    immutable: true,
}));

// Root route for health check
app.get('/', (req, res) => {
    res.json({ 
        message: 'Swiggy API Server is running!', 
        version: '1.0.0',
        endpoints: [
            '/categories',
            '/top-restaurant-chains'
        ]
    });
});

// Endpoint to get data from category.json
app.get('/categories', (req, res) => {
    // Path to category.json file
    const filePath = path.join(__dirname, 'data/category.json');

    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Parse JSON data
        try {
            const categories = JSON.parse(data);
            res.json(categories);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});
app.get('/top-restaurant-chains', (req, res) => {
    // Path to restaurantChains.json file
    const filePath = path.join(__dirname, 'data/restaurantChains.json');

    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Parse JSON data
        try {
            const restaurantChains = JSON.parse(data);
            res.json(restaurantChains);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});


// Start the server (only in local development)
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server is listening at http://localhost:${port}`);
    });
}

// Export the Express API for Vercel
module.exports = app;
