const http = require('http')

http.createServer((req, res)=>{
    if(req.url == "/psm"){
        // res.end("Welcome Parth")
        return res.end("Welcome Parth")
    }

    res.end("Welcome User")
}).listen(7000)