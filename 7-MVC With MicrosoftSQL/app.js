const express = require("express");
const testing = require("./util/database");
const app = express();



app.listen(5000, () => {
    console.log("I am listening for a port 5000"); 
});