function createFruitsObject() {
  const fruitsObject = {};

  let key = prompt("Enter Fruit's Name");
  let value = +prompt("Enter the Fruit's Quantity");

  if (value > 1) {
    fruitsObject[`${key}s`] = value;
  } else {
    fruitsObject[key] = value;
  }

  return fruitsObject;
}

createFruitsObject();
