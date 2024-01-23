
import mongoose from 'mongoose';
import express, {request, response} from 'express';

// Connection URI
const uri = 'mongodb+srv://Admin1:1800@cluster0.46nr2lj.mongodb.net/?retryWrites=true&w=majority'; // Update with your MongoDB connection URI and database name

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection events
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

/*

// Close the Mongoose connection when the Node.js process is terminated
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});

*/

//const express = require('express');

const app = express();

app.get('/', async (req, res) => {
    res.status(500).send("<h1>hello world!!</h1>")
})

app.listen(5050, () => {
    console.log(`Server started on port ${5050}`)
})