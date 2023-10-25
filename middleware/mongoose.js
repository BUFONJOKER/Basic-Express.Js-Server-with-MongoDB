const mongoose = require('mongoose');

async function connectToMongoose(req, res, next) {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/taskdbk', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');
    next(); // Continue with the request handling
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    next(error); // Pass the error to the error handling middleware
  }
}

module.exports = connectToMongoose;
