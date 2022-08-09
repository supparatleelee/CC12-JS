const liFirst = document.querySelector('#\\32'); // #\\unicode i.e. 3 = 33 = ('#\\33') //CSS selector
const liSecond = document.querySelectorAll('li')['1'];
const liThird = document.getElementById('2'); // can put ID name directly no need # or whatever
const liFourth = document.getElementsByTagName('li')['1'];

console.dir(liFirst);
console.log(liSecond);
console.log(liThird);
console.log(liFourth);
