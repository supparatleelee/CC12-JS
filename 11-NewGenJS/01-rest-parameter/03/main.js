const mergeObjects = (...objs) => {
  let reObj = objs.reverse(); // cuz we need to make the later object to newest object
  let newObj = {};

  newObj = reObj.reduce((acc, item) => {
    //merge object
    Object.assign(acc, item);
    return acc;
  }, {}); // {} = empty object

  return newObj; //?
};

const obj1 = { num1: 1 };
const obj2 = {
  num2: 2,
  num3: 3,
  num1: 4,
};

mergeObjects(obj1, obj2);
