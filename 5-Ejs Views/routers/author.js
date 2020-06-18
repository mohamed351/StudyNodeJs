const express = require("express");
const books = require("../data/data");
const path = require("path");
const router = express.Router();

router.get("/", (request, response) => {
    response.render(path.join(__dirname, "../", "views", "author.ejs"), {data: books.authors});

});
exports.router = router;
