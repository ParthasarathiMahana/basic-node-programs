const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    const data = fs.readFileSync('index.html').toString();
    res.write(data);
    // res.write("Hi");
    res.end()
})

server.listen(3500)