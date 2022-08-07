function getLongText() {
  return;
  ('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
}

console.log(getLongText()); // *

//undefined because whenever JS found return it will end the function immediately.
//So, the lorem won't shown.

// Else, if you want to return multiple lines' value do this - return()
// return (
// "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
// );
