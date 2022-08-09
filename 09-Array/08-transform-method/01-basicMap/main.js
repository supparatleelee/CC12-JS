const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
console.log(array1.map((item) => item * 2));

const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
console.log(array2.map((item) => '' + item));

const array3 = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
console.log(array3.map((item) => typeof item));

const array4 = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
console.log(array4.map((item) => item.toUpperCase()));

const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
console.log(array5.map((item) => (item % 2 === 0 ? 'even' : 'odd')));

const array6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
console.log(array6.map((item) => Math.abs(item)));

const array7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
console.log(array7.map((item) => item.toFixed(2)));

const array8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
console.log(array8.map((item, index) => MONTH[item]));

const array9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
console.log(array9.map((item) => Math.pow(item, 1 / 4)));

const array10 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 },
];
// result: ["apple", "banana", "watermelon"]
console.log(array10.map((item) => item.name));

const array11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 },
];
// result: [14, 18, 32]
console.log(array11.map((item) => item.age));

const array12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' },
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
console.log(array12.map((item) => `${item.name} ${item.surname}`));

const array13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' },
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
const CURRENT_YEAR = '2021';
console.log(
  array13.map((item) => {
    let currentObject = { ...item }; // Clone object because the object need to be the same === don't want to modify it.
    let age = CURRENT_YEAR - item.birth.slice(0, 4);
    currentObject.age = age;
    return currentObject;
  })
);

//Use in React (?)
const array14 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' },
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]

//re-use MONTH variable & make it to be lowercase
const month = MONTH.map((item) => item.toLowerCase());
console.log(
  array14.map(
    (item) =>
      `<tr><td>${item.name}</td><td>${item.birth.slice(8, 10)} ${
        month[item.birth.slice(5, 7) - 1]
      } ${item.birth.slice(0, 4)} </td></tr>`
  )
);
// -1 to make it into number
// index 0-11
// i.e 12 -1 = 11 = dec
