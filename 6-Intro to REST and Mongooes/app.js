const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();


mongoose.connect(process.env.DB_Connection, { useNewUrlParser: true }, () => {
    console.log("successfull connection to DbServer");
});

app.listen(5000, () => {
    console.log("I am listening to port 5000"); 
});






