function isNum (num){
    return !(num === null || num ===  '' || num.trim() === '' || isNaN(num));
}

let result;

do {
    result = prompt("Enter Number")
    console.log(result)
} while (isNum(result))
