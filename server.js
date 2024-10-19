
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serves static files from the 'public' directory

// Load existing rides from rides.json
let rides = [];
fs.readFile('rides.json', 'utf8', (err, data) => {
    if (!err && data) {
        rides = JSON.parse(data);
    }
});

// Endpoint to save rides data
app.post('/saveRides', (req, res) => {
    const newRide = req.body; // Incoming ride data
    newRide.id = (rides.length + 1).toString(); // Auto-generate ID
    console.log('Received new ride:', newRide); // Debugging log

    // Add new ride to the in-memory array
    rides.push(newRide); 

    // Write to rides.json
    fs.writeFile('rides.json', JSON.stringify(rides, null, 2), (err) => {
        if (err) {
            console.error('Error saving rides to rides.json:', err);
            return res.status(500).send('Error saving rides data');
        }
        console.log('Ride saved successfully'); // Debugging log
        res.status(201).send('Ride saved successfully');
    });
});

// Endpoint to get all rides data
app.get('/rides', (req, res) => {
    res.json(rides); // Send the rides data as JSON
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});