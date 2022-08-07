function ucFirst(str) {
  if (!str) {
    console.log('Put some string!');
  }

  let newString = str.trim();
  let firstChar = newString[0].toUpperCase();
  let leftString = newString.slice(1);
  return firstChar + leftString;
}

let string = '    string';
console.log(ucFirst(string));
