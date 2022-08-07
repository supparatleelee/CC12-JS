function checkStr(str) {
    // if (str.toLowerCase() === 'xxx' || str.toLowerCase() === 'sex' || str.toLowerCase() === 'porn') {
    //     return true
    // } else {
    //     return false
    // }

    let lowerStr = str.toLowerCase()

    let isMatch = lowerStr.includes('xxx') || lowerStr.includes('porn') || lowerStr.includes('sex')
    return isMatch
}

let string = 'XXX'
checkStr(string)