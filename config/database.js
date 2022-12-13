require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("School_Backend Database Connected Successfuly----------------------");
  } catch (error) {
    console.log("(School Database Connection error) ", error);
  }
};
module.exports = connectDB;
