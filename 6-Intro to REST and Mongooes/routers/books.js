const books = require("express");
const Books = require("../model/books");
const { json } = require("body-parser");

const router = books.Router();

router.get("/", (request, response) => {
    response.json({ message: "Hello World" });
});
router.post("/", async (request, response) => {
    const newBook = new Books({
        title: request.body.title,
        description: request.body.description,
        price: request.body.price
    });
    try {
        const savePost = await newBook.save();
        response.json(savePost);
    }
    catch (erro) {
        response.json({ message: erro });
    };
    
});

exports.booksRouter = router;