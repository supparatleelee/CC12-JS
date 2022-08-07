// #1
function spread(arr) {
  const newArr = [...array1];

  newArr.forEach((item, index) => {
    if (index === 3) {
      let newValue = item ** 2;
      //   return newArr.push(newValue);
      return newArr.splice(3, 1, newValue);
      //change index 3 to === newValue
    }
  });

  return newArr;
}

const array1 = [2, 3, 5, 6, 7];

spread(array1);

// #2
// const array1 = [1, 2, 3, 4, 5, 6];
// let square = (arr) => {
//   let newArr = [...arr];
//   newArr.splice(3, 1, arr[3] ** 2);
//   return newArr;
// };
// console.log(square(array1));
// console.log(array1);

// #3
// -- See instructor file --

// #4
// clone
// check if there is index 3
// modify it directly and return it
