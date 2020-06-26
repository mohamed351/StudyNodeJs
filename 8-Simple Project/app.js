const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRouter = require("./router/book");
const authorRouter = require("./router/author");
require("dotenv/config");
const app = express();


app.use(bodyParser.json());
app.use("/book", bookRouter);
app.use("/author", authorRouter);



mongoose.connect(process.env.ConnectionString, () => {
    console.log("Database Connection Successfull");
});
app.listen(5000, () => {
    console.log("Listening for port 5000"); 
});