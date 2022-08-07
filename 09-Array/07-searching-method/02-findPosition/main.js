const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]


let resultArr = [`${alphabets.indexOf('a')}, ${alphabets.indexOf('a', [2])}, ${alphabets.indexOf('a', [4])}`]
// but we don't know how many times we have to search.

console.log(resultArr)