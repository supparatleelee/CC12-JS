// Counter = 0
// 4596 
// 459 ==> count = 1 // (4596 - 6)/10 == 4590/10 === 459
// 45 ==> count = 2 // (459 - 9)/10 == 450/10 === 45
// 4 ==> count = 3  // (45-5)/10 == 40/10 == 4
// 0 ==> count = 4  // (4-4)/10 == 0

let inp = +prompt('Enter Number');
let count = 0;

while (inp !== 0) {
    let inpLastDigit = inp % 10; // Got the decimal that same as its last digit.
    inp = (inp - inpLastDigit) / 10; //so when it ends with 0 -> /10 will decrease its own digit.
    count++;
}
alert(count);

//if user type any number, - with its own last digit.
//Then, /10 to decause its value while count how many digit it is.
//the final answer is the digit of the number user typed.