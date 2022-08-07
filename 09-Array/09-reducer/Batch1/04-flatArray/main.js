let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
];
// expected result: [0, 1, 2, 3, 4, 5]

function flatArr (arr) {
    let flatArr = arr.reduce((acc, item, index) => {
        acc.push(...item)
        return acc
    }, [])

    return flatArr
}

flatArr(flattened)