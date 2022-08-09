let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin]
/*
[
    { name: 'John', age: 27 },
    { name: 'Jo', age: 21 },
    { name: 'Jin', age: 25 }
]
*/


function getAverageAge(array) {

    let sumAge = array.reduce(function(acc,item){ // item == {name : 'John' , age: 27}
        let age = item.age
        return acc+age  // return new Accumulator for NEXT LOOP
    },0)
    
    let averageAge = sumAge / array.length
    return averageAge
}


getAverageAge(arr) //?