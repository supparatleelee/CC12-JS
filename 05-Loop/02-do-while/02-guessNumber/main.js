let ans = +prompt("User 1 : Enter Number");
let count = 0;
let guess;

if (ans >= 1 && ans <= 99) {

    do {
        guess = +prompt("User 2 : Guess The Number");
        count++;

        if (guess > ans) {
            alert('too high')
        } else if (guess < ans) {
            alert('too low')
        }
        
    } while (guess !== ans)

} else {
    alert('Invalid Range')
}

alert(`Attempt : ${count}`);