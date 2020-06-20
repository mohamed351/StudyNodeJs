const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const booksRouter = require("./routers/books");


require("dotenv/config");
const app = express();
app.use(bodyParser.json());
app.use("/books", booksRouter.booksRouter);

mongoose.connect(process.env.DB_Connection, { useNewUrlParser: true }, () => {
    console.log("successfull connection to DbServer");
});

app.listen(5000, () => {
    console.log("I am listening to port 5000"); 
});






