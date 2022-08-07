let sum = 0;
let evenSum = 0;
let oddSum = 0;
let evenPower = 0;
let oddPower = 0;
//Declare global variables outside the loops for those loops

for (i = 1; i <= 100; i++) {
    sum += i;

    if (i % 2 === 0) {
        evenSum += i;
        evenPower += i ** 2;
    } else {
        oddSum += i;
    } 
    if (i % 3 === 0) {
        oddPower += i ** 2;
    }
}

let cal = evenPower - oddPower

console.log(sum) // 5050
//(100+1)(100*2) = 5050
console.log(evenSum, oddSum) // 2550 2500
console.log(cal) // 58939

console.log (evenPower, oddPower); // 171700 112761
