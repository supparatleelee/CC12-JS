// check PrimeNumber
function checkPrime(num) {
  let isPrime = true;
  //loop ของตัวหาร
  for (let i = 2; i < num; i++) {

    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime
}
// console.log(checkPrime(7)) // return true

// get num input and show Prime number from the start till that number
function printPrime(limit) {
    for (let i =2; i <= limit; i++) {
      let isPrime = checkPrime(i)

      if(isPrime) {
        console.log(i)
      }
    }
}

printPrime(500)