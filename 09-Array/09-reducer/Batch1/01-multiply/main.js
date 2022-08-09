const nums = [-3, 2, 11, -7, 4, 6];

let result = nums.reduce(function(acc,item,index,array){
    let newResult = acc * item
    return newResult
},1)

result //?

let res = nums.reduce((a,c)=> a*c, 1)

res //?