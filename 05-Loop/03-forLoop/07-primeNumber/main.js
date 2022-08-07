//C = a * b ex. 25 = 5 * 5

// A prime number is a whole number greater than 1 whose only factors are 1 and itself.
// = find by starting to check from 2 onwards -> i
// then if any number can divied by i -> j = Not Prime Number
// = need to check the variables value one by one = for loop & i++ = 2 for loops for i & j till 100
// https://pantip.com/topic/33279340
for (let i = 2; i <= 100; i++) {
  let primeNumber = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      primeNumber = false;
      break; // so it won't run the code below anoymore for this loop.
    }
  }

  if (primeNumber === true) {
    console.log(i);
  }
}
