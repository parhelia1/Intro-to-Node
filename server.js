var http = require('http');

var url = require('url');

var fs = require('fs');
//za HUROKU
const PORT = process.env.PORT || 5000;

http.createServer(function(request, response) {
    var q = url.parse(request.url, true);
    var filename = '.' + q.pathname;
    if (filename === './') { filename = './index' };
    filename = filename + '.html';
    fs.readFile(filename, function(err, data) {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            return response.end('404 Not Found');
        };

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        console.log('...Incoming request: ' + request.url);


        response.end();
    });

    // var q = url.parse(request.url, true).query;
    // var dates = q.year;
    //    response.end(dates);

}).listen(PORT);

console.log('Server listening port 5000');

//console.log('Server running at http://127.0.0.1:8081/');