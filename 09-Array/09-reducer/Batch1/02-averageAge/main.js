let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

// let result = arr.reduce((3, arr.age) => arr.age / 3 )

function getAverageAge(array) {
    let sumAge = array.reduce(function(acc, item) {
        let age = item.age //array can't access .age, must be the object.

        return acc+age
    }, 0)

    let averageAge = sumAge / array.length
    return +averageAge.toFixed(2)
}

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33