function changeStringPattern(text) {
  //identify where is the dash in the string, if none = -1
  let dashCharIndex = text.indexOf('-');
  //identify the index of the character we will change to the camel case = after the dash character = + 1
  let camelCase = dashCharIndex + 1;

  if (dashCharIndex !== -1) {
    return (
      text.slice(0, dashCharIndex) +
      text[camelCase].toUpperCase() +
      text.slice(camelCase + 1)
    );
  } else {
    return text;
  }
}

let text = ['color', 'text-align'];

//new array but modify
console.log(text.map(changeStringPattern));
console.log(text);
