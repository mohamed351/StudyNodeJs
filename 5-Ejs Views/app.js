const express = require("express");
const author = require("./routers/author");
const books = require("./routers/book");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use("/author", author.router);
app.use("/books", books.router);
app.use("/", (req, res) => {
    res.redirect("/author"); 
});

app.listen(5000, () => {
    console.log("I am listening for a port 5000");
});
