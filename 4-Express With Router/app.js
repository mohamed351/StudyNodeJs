const express = require("express");
const app = express();
const author = require("./router/author");
const book = require("./router/book");
const path = require("path");

app.use("/author",author);
app.use("/book",book);
app.use("/", (request, response) => {
    response.sendfile(path.join(__dirname,"views","main.html"));
});
app.listen(3000);

