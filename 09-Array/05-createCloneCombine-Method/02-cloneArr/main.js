const arr = [1, 5, 7, 11];

function clone(arr) {
    let newArr = arr.slice()
    return newArr
}

clone(arr)