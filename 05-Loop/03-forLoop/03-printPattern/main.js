let dots = 4;
let line = '';

for (let y = 1; y <= dots; y++) {
    for (let x = 0; x < y; x++) { // if < dots it will be 16 blah blah + every times it will let j again = it will start from 0 again
        line += '*';
    }
  line += '\n'
}

console.log('```')
console.log(line)
console.log('```')