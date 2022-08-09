/*
INPUT : Array
OUTPUT : OBJECT
*/
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}
 /*
        IF current name already exits 
            ADD value +  1
        ELSE 
            ADD new Property and SET value = 1
*/

let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John']; // item

let result = names.reduce(function(acc,item,index,array) {
    // ######################## Do logic
   

    // ADD Property to Object
    // let currentKey = acc[item]
    // if(!currentKey) {
    //     acc[item] = 1
    // } else {
    //     acc[item] = acc[item] + 1
    // }
    acc[item] // acc.Jack ==> {Jack}
    acc[item]  = acc[item] ? acc[item] + 1 : 1 
    // ##########################
    
    // return accumalator for Next Loop
    return acc

} , {})

result //?