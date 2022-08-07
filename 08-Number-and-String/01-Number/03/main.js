function calPoint(sell) {
    let point = Math.floor(sell / 100)
    return point
}

// let sell = +prompt('')

console.log(calPoint(23000))
