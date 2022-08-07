let a = undefined; // undefined data type = false
let b = ' '; // white space = string = true
let c = !b; // Not true = false

let d = Boolean(a);
let e = !!b;
let f = Boolean(c);

console.log(d);
console.log(e);
console.log(f);

let g = '   ';
let h = !!g.trim() // false

console.log(h)