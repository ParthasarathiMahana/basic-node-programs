const fs = require('fs')

// create / over write a file
fs.writeFileSync("psm.txt", "name = Parthasarathi Mahana")
/*fs.writeFileSync("psm.txt", "name = Parthasarathi Mahan")*/

// append to file
fs.appendFileSync("psm.txt", ", age = 27")

const buffer = fs.readFileSync('psm.txt')
console.log(buffer.toString());

// delete a file
fs.unlinkSync("psm.txt")