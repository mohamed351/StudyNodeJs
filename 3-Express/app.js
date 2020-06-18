/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response) => {
	response.send(
		"<h1>Hello World in Express World </h1> <form method='POST'> <input type='text' name='txtmesssage' /> <button type='submit'> Submit Form </button>   </form>"
	);
});
app.post("/", (request, response) => {
    console.log(request.body);
    console.log(request.body.txtmesssage);
    response.redirect("/");
});

app.listen(3000, () => {
	console.log("I am listening to post 3000");
});
