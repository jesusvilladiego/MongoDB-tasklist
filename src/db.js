const {mongoose} = require('mongoose')
const dotenv = require("dotenv");

dotenv.config();

const URI = process.env.URI;



const connectDB = async () => {
  
    try {
const db =   await mongoose.connect(MONGO_URI);
   
    console.log('Connected to MongoDB Atlas');
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
};


module.exports = connectDB;

  