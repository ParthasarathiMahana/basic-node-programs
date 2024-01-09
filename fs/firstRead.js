const { log } = require('console');
const fs = require('fs');

/* const buffer = fs.readFileSync('myinfo.txt');
 log(buffer.toString()) */

const buffer = fs.readFileSync('myinfo.txt', {encoding: "utf8"});

log(buffer)