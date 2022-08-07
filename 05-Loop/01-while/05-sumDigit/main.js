let inp = +prompt('Enter Number');
let count = 0;
let sum = 0; // need to put value for sum as well.

while (inp !==0) {
    let inpLastDigit = inp % 10
    sum += inpLastDigit
    inp = (inp - inpLastDigit) / 10
    count++;
}

alert(sum);

// 123 === 1 + 2 + 3;