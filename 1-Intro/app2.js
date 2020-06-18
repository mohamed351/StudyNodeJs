const http = require("http");
const fs = require("fs");
let server = http.createServer((request, response) => {
   
    response.setHeader("Content-type", "text/html");
    if (request.url == "/") {
        
        response.write("<html>")
        response.write("<head>");
        response.write("<title> Hello World </title>");
        response.write("</head>");
        response.write("<body>");
        response.write("<a href='/message'> Message </a>")
        response.write("</body>");
        response.write("</html>");
        return response.end();

    }
    else if (request.url == "/message" && request.method == "GET") {
        response.write("<html>")
        response.write("<head>");
        response.write("<title> Hello World </title>");
        response.write("</head>");
        response.write("<body>");
        response.write(`<form method='POST' action='/message'>`);
        response.write("<textarea> </textarea>");
        response.write("<button> Send </button>");
        response.write(`</form>`);
        response.write("</body>");
        response.write("</html>");
        return response.end();
    }
    else if (request.url == "/message" && request.method == "POST") {
         
        fs.writeFileSync("message.txt", "Dummy");
        response.statusCode = 302;
        response.setHeader("Location", "/");
        return response.end();

    }
});
server.listen(9600);