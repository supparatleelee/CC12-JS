function max(num1, num2, num3, num4) {
  // let num = [num1, num2, num3, num4]
  // console.log(num.sort())
  // return num

  if (num1 === undefined) {
    return undefined;
  }

  if (num2 === undefined) {
    return num1;
  }

  if (num3 === undefined) {
    return num1 > num2 ? num1 : num2;
  }

  if (num4 === undefined) {
    Math.max(num1, num2, num3);
    return Math.max(num1, num2, num3);
  }

  return Math.max(num1, num2, num3, num4);
}

max(); // undefined
max(2); // 2
max(3, 1); // 3 (maxNum)
max(7, 3, 9, 2); // 9 (maxNum)
