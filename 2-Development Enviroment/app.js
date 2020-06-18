const testingDevelopment = require("http");
const server = testingDevelopment.createServer((request, response) => {
    if (request.url == "/") {
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>Testing Development Enviroment</h1>");
        response.end();
    }
    else
    {
        response.statusCode = 404;
        response.write("Not found :(");
        response.end();
    }

});
console.log("Start Listening port 3000..");
server.listen(3000);
