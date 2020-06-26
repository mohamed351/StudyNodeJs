const { response, request } = require("express");
const books = require("../model/book");
const { json } = require("body-parser");
const mongoose = require("mongoose");

exports.getBook = (request, response) => {
  
    books.find().then(a => {
        console.log(a);
        response.json(a);
    });
   
}

exports.PostBook = async (request, response) => {
    console.log(request.body);
    let book = new books({
        title: request.body.title,
        image: request.body.image,
        description: request.body.description,
        rating: request.body.rating,
        authorId:mongoose.Types.ObjectId(request.body.authorId)
    });
    console.log(book);
    let result = await book.save();
    response.json(result);
}