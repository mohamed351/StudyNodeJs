const express = require("express");
const controller = require("../controllers/book")


const router = express.Router();
router.get("/", controller.getBook);
router.post("/", controller.PostBook);

module.exports = router;