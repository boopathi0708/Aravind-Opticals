const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://praneeth:praneeth2004@cluster0.hplvp4p.mongodb.net/boopathi?retryWrites=true&w=majority', { 
            dbName: 'Opticals'
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; // Re-throw the error to be caught by the caller
    }
}

module.exports = { connectToDatabase };