let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

/*
DO lowercase
DO split by "" // arr
FOR every item of arr
    IF item isnot white space

*/

let lowercase = str.toLowerCase()
// const arrChar = lowercase.split("").sort().join("").trim()
const arrChar = lowercase.split("")

arrChar //?

const result = arrChar.reduce(function(acc,char) {

    if(char.trim() !== ""){
        char //?
    // let foundValue = acc[char] // acc['i'], acc['l']

    // if(foundValue) {
    //     acc[char] += 1
    // } else {
    //     acc[char] = 1
    // }
    acc[char] = acc[char] ? acc[char] + 1 : 1

    }

    return acc
} , {})
result //?