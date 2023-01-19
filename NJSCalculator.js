const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question = prompt => {
    return new Promise((resolve) => {
        rl.question(prompt, resolve)
    })
}

(async () => {
    const num1 = await question("Enter the first number: ")
    const calculationType = await question("Choose between:\n1) Addition\n2) Subtraction\n3) Multiplication\n4) Division")
    const num2 = await question("Enter the second number: ")

    if (calculationType == 1) {
        console.log(num1 + num2);
    } else if (calculationType == 2) {
        console.log(num1 - num2);
    } else if (calculationType == 3) {
        console.log(num1 * num2);
    } else if (calculationType == 4) {
        console.log(num1 / num2);
    } else {
        console.log(calculationType + " is not a valid function");
    }

    rl.close()
})()