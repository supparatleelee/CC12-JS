// Function
// INPUT : object + num (used to multiply)
// OUTPUT : object that has already modified only value that is number in the key by multiply

// CHECK each key and value
// IF value TYPE NUM
// UPDATE value for that key by multiply num
// ELSE value TYPE !num
// !UPDATE

// RETURN modified object

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj, num) {
  //To remain global varialbe object -> craete new object then clone.
  const result = {};

  for (let key in obj) {
    let currentValue = obj[key]; // key's value

    if (typeof currentValue === 'number') {
      result[key] = currentValue * num; // key's value of new object that is a clone object.
    } else {
      result[key] = currentValue;
    }
  }

  return result;
}

console.log(menu);
console.log(multiplyNumeric(menu, 3));
