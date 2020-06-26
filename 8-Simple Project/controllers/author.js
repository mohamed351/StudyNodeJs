const authors = require("../model/author");
const { response } = require("express");

exports.getAuthors =(request, response) => {
    authors.find().then(a => {
        response.json(a);
    })
};
exports.postAuthor = (request, response) => {
    let newAuthor = new authors({
        Name: request.body.Name
    });
    newAuthor.save();
    response.json(newAuthor);
}