require('dotenv').config()

const mongoose = require('mongoose');

mongoose.connect(`${process.env.MG_CONECTION}`)

mongoose.connection.on('connected', () => {
    console.log('Now connected to MongoDB Cloud Server!');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
module.exports = mongoose;