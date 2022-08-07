// #1
function filterOutOdds(...nums) {
  let numValue = [];
  for (let num of nums)
    if (num % 2 === 0) {
      numValue.push(num);
    }
  return numValue;
}

// #2
// const filterOutOdds = (...nums) => nums.filter((cur) => cur % 2 == 0);

console.log(filterOutOdds(2, 3, 5, 6));
