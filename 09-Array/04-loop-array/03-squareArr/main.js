const array = [2, 3, 5, 7, 11];

function squareArr(arr) {
    const resultArr = []

    arr.forEach(item => {
        let power = item ** 2
        resultArr.push(power)
    })

    return resultArr
}

console.log(squareArr(array))