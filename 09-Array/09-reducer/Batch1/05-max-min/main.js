let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

const initailValue = {
    max : arr[0],
    min : arr[0],
}

let summary = arr.reduce((acc,item)=> {

    // Check MAX
    if(acc.max < item) {
        acc.max = item
    }
    // Check MIN
    if(acc.min > item) {
        acc.min = item
    }
    return acc

},initailValue)


function findMaxMin(array) {
    const initailValue = {
        max : array[0],
        min : array[0],
    }

    let summary = arr.reduce((acc,item)=> {

        // Check MAX
        if(acc.max < item) {
            acc.max = item
        }
        // Check MIN
        if(acc.min > item) {
            acc.min = item
        }
        return acc
    
    },initailValue)

    return summary
}
findMaxMin(arr) //?