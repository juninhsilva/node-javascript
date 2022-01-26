const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./ram-usage.js');

http.createServer((req, res) => {
    let url = req.url;
    if (url === '/') {
        res.end('<h1>Working</h1>');
    } else if (url === '/stats'){
        res.end(JSON.stringify(stats, null, 2))
    }
}).listen(port, () => {
    console.log(`Server is running at ${host}:${port}`);
    console.log(stats);
});