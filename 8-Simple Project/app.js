const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();



mongoose.connect(process.env.ConnectionString, () => {
    console.log("Database Connection Successfull");
});
app.listen(5000, () => {
    console.log("Listening for port 5000"); 
});