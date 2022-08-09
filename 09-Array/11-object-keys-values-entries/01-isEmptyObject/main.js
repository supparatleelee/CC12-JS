function checkEmptyObj(obj) {
  return Object.keys(obj).length === 0;
}

let user = {
  name: 'John',
  age: 27,
};

checkEmptyObj(user);
