const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (request, response) => {
   
    response.sendfile(path.join(__dirname, "../", "views", "book", "index.html"));
});

module.exports = router;
