let input = +prompt('Enter your grade');

if (input >= 80) {
    alert('A')
} else if (input >= 70 && input <= 79) {
    alert('B')
} else if (input >= 60 && input <= 69) {
    alert('C')
} else if (input >= 50 && input <= 59) {
    alert('D')
} else if (input < 50) {
    alert('F')
} else {
    alert('Error')
}