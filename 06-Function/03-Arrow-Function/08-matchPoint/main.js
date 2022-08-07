let score = 0;
const matchPoint = (result) => {
    if (result === 'win') {
        score = 3;
    } else if (result === 'draw') {
        score = 1
    } else {
        score = 0
    }
    return score
}

matchPoint('win')

const calcTotalPoint = (win, draw) => 3*win + draw
console.log(calcTotalPoint(3,2))