const express = require("express");
const author =require("../controllers/author")
const router = express.Router();

router.get("/", author.getAuthors);
router.post("/", author.postAuthor);

module.exports = router;