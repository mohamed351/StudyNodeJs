const http = require("http");

let server = http.createServer(function (request, response) {
    console.log("request ");
    console.log(request.method);
    console.log(request.url);
   
    response.setHeader("Content-Type","text/html")
    if (request.url == "/") {
        response.write("<h1> Home </h1>");
        response.end();
    }
    
    

  
});
server.listen(9600);
