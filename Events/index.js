const http = require('http')

http.createServer((req, res)=>{
    if(req.method == "POST"){
        let body = "";
        req.on('data', (chunk)=>{
            body += chunk.toString()
        })
        req.on('end',()=>{
            console.log(body);
            res.end("data recieved.")
        })
    }else{
        res.end("PSM")
    }
}).listen(7000)