let budget = 100000;
let interest = 2.5;
let year = 10;
let getInterestPerYear = 0;

for (let i = 0; i < year ; i++) {
    getInterestPerYear = budget * (interest/100);
  	budget += getInterestPerYear;
}
console.log(budget)