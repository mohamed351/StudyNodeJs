const express = require("express");
const books = require("../data/data");
const path = require("path");
const router = express.Router();

router.get("/", (request, response) => {
    response.render(path.join(__dirname, "../", "views", "books.ejs"), {data: books.books});

});
exports.router = router;
