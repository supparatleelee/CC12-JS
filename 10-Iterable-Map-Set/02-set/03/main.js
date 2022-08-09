const values = [1, 4, 8, 2, 1, 3, 3, 8];

function unique(arr) {
  const set = new Set(arr); // so there are no duplicate values
  const newArr = Array.from(set); // convert the values in the set into array

  return newArr;
}

console.log(unique(values)); // [1, 4, 8, 2, 3]
