//n!
//4! = 1*2*3*4

const calfactorial = (num) => {
    let result = 1

    for (let i = 1; i <= num; i++) {
        result *= i
    }
    return result
}

calfactorial(4)