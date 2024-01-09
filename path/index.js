const { log } = require('console');
const fs = require('fs');
const path = require('path')


const myPath = path.join('src', 'myInfo.txt')
log(myPath)

const myResolvedPath = path.resolve('src', 'myInfo.txt')
log(myResolvedPath)

fs.readFile(myResolvedPath, (err, data)=>{
    if(err){
        log(err)
    }else{
        log(data.toString())
    }
})

log(path.extname(myResolvedPath))