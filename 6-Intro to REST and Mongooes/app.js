const express = require("express");
const mongoose = require("mongoose");
const app = express();


mongoose.connect("mongodb://localhost:27017/RestAPI", { useNewUrlParser: true }, () => {
    console.log("successfull connection to DbServer");
});

app.listen(5000, () => {
    console.log("I am listening to port 5000"); 
});






