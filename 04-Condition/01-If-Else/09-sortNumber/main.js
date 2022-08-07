let in1 = +prompt('Number1');
let in2 = +prompt('Number2');
let in3 = +prompt('Number3');

// let num = [in1, in2, in3]

// console.log(num.sort())
// Aow if-else nee na lol

if (in1 > in2 && in1 > in3) {
    // console.log("in1 is maximum")
    if (in2 > in3) {
        console.log(`${in1}, ${in2}, ${in3}`)
    } else if (in3 > in2) {
        console.log(`${in1}, ${in3}, ${in2}`)
    }
} else if (in2 > in1 && in2 > in3) {
    // console.log("in2 is maximum")
    if (in1 > in3) {
        console.log(`${in2}, ${in1}, ${in3}`)
    } else if (in3 > in1) {
        console.log(`${in2}, ${in3}, ${in1}`)
    }
} else if (in3 > in1 && in3 > in2) {
    // console.log("in3 is maximum")
    if (in1 > in2) {
        console.log(`${in3}, ${in1}, ${in2}`)
    } else if (in2 > in1) {
        console.log(`${in3}, ${in2}, ${in1}`)
    }
} 