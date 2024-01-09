const readline = require('readline')

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

interface.question("first number ",(num1)=>{
    interface.question("second number ",(num2)=>{
        const sum = Number(num1)+Number(num2)
        console.log(sum);
    })
})