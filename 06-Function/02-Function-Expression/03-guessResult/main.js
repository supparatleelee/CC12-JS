function magic() {
    return function (x) {
      return x * 42;
    };
  }
  //function that return function

  const answer = magic();
  console.log(answer); // * // log function body
  console.log(answer(1337)); // ** // log 1337*42 = 56154 
  console.log(magic(1337)(42)); // *** // log 42*42 = 1764

// Invoke function that return function -> magic()(=function (x));