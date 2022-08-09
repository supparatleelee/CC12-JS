const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
]

//จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก
/*
avg = (P1*W1 + P2*W2 + P3*W3 + .... PN*WN) / (W1+W2+W3+...+WN)
*/

function calAverage (array) {
    // ## 1
    // let totalWeigth = 0
    // let totalPoint = array.reduce(function(acc,item,index,arr){
    //     let score = item.score * item.weight
    //     let newTotalPoint = acc + score

    //     totalWeigth += item.weight
    //     return newTotalPoint
    // },0)
    // return totalPoint/totalWeigth

    // ## 2
    let summaryObj = array.reduce((acc,item,index) => {
        acc.score += item.score * item.weight
        acc.weight += item.weight

        return acc

    },{score:0,weight:0})

    return summaryObj.score / summaryObj.weight
}

calAverage(scores)  //?