let x = 1;
function func() {
  console.log(x); // * // Error because can't access it before declare since there is let x in the function that look within.
  let x = 2;
}
func();