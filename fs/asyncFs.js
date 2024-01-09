const { log } = require('console')
const fs = require('fs')

fs.readFile('myinfo.txt', (err, data)=>{
    if(err){
        return log("Got an error while reading the file",err)
    }
    log(data.toString())
})

fs.writeFile("psm.txt", "My name is parth.", (err)=>{
    if(err){
        log("got error while writing the file")
    }else{
        log("file written")
    }
})

fs.appendFile("psm.txt", "I am a human", (err)=>{
    if(err){
        log(err)
    }else{
        fs.readFile('psm.txt', (err, data)=>{
            if(err){
                return log("Got an error while reading the file",err)
            }
            log("this is the text after append: ",data.toString())
        })
    }
})

// fs.unlink("psm.txt", (err)=>{
//     if(err){
//         log(err)
//     }else{
//         log("file is deleted")
//     }
// })