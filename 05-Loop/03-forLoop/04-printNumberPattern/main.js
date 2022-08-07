let num = 8;
let string = '';

console.log('```')
for (let y = 1; y <= num; y++) {
    for (let x = 1; x <= y; x++) {
        string += `${x}`;
    }
  string += '\n'
}
console.log(string)
console.log('```')