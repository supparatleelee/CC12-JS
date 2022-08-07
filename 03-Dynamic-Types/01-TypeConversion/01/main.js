let a = undefined;
let b = 2;
let c = a++;

let d = String(a)
let e = "" + b
let f = `${c}`

console.log(d) // undefined X NaN it seems like it convert to Number type first -> then string?
console.log(e) // 2
console.log(f) // NaN because a++ = number type, but + with undefined = NaN