//for database 
//import mongoose
const mongoose = require("mongoose");
const colors = require("colors");

//create new function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    //dynamically add mssg after connecting to database it show
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};
//ecport 
module.exports = connectDB;