const liFirst = document.querySelector('[id="3"]'); // \\-> null //CSS selector
const liSecond = document.querySelectorAll('li')['2'];
const liThird = document.getElementById('3'); // can put ID name directly no need # or whatever
const liFourth = document.getElementsByTagName('li')['2'];

console.dir(liFirst);
console.log(liSecond);
console.log(liThird);
console.log(liFourth);
