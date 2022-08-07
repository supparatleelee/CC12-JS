function keepContInp(inp){
    return !(input === null || input.trim() === '' || input == 0 || isNaN(input))
}

let inp;
let sum = 0;
let count = 0;

do {
    input = prompt("Enter Number")
    if(keepContInp(inp)){
        sum += +input;
        count++;
    }

} while (keepContInp(inp))

if(count > 0) {
    console.log(sum)
    console.log(count)
    console.log(sum/count)
}