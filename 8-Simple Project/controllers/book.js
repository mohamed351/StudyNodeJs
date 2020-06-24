const { response, request } = require("express");
const books = require("../model/book");
const { json } = require("body-parser");

exports.getBook = (request, response) => {
    console.log(books.find({}));
    response.json({ message: "Hello" });
}

exports.PostBook = async (request, response) => {
    let book = new books({
        title: request.body.title,
        image: request.body.image,
        description: request.body.description,
        rating: request.body.rating,
        
    });
    let result = await book.save();
    response.json(result);
}