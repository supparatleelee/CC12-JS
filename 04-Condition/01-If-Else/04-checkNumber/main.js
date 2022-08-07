let input = +prompt('Enter Number')

if (input > 0) {
  console.log("Positive number");
} else if (input === 0) {
  console.log("Zero");
} else if (input < 0) {
  console.log("Negative number");
} else {
  console.log("Invalid number");
}

// if don't put +, JS will automatically convert the input from string to number for us because there is the comparison operator.
// but, of course, the first else if will not work as expected.