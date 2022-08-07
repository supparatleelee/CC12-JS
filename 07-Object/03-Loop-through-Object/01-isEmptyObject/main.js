// INPUT : obj
// OUTPUT : True = Empty Object
//          False = if have >= 1 key / property

function checkEmptyObject(obj) {
  // if (obj === {}) {
  //     return true
  // } else {
  //     return false
  // }

  // if 0 key = won't run the for...in
  for (let key in obj) {
    return false;
  }
  //only empty object that can run till this line.
  return true;
}

const user1 = {
  name: 'CC12',
};

const user2 = {
  name: 'CC',
  age: 20,
};
const user3 = {};

console.log(checkEmptyObject(user1)); // false
console.log(checkEmptyObject(user2)); // false
console.log(checkEmptyObject(user3)); // true
console.log(checkEmptyObject({ name: 'CC', age: 20 })); // on-the-fly object // false
