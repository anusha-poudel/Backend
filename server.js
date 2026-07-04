import http from 'node:http';

const server = http.createServer((req, res) =>{
    res.writeHead(200, {
        'content-type': 'text/html',
        "cache-control": 'no-cache, no-store, revalidate',
        "set-cookie": 'sessionid = abc; httponly'
    });
    res.write("hello");
    res.end();
});

server.listen(2000, () =>
    console.log('server running at port 2000')
);