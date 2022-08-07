let input = +prompt('Enter your grade');
let message = input >= 80 ? alert("A")
    : input >= 70 && input <= 79 ? alert('B')
    : input >= 60 && input <= 69 ? alert('C')
    : input >= 50 && input <= 59 ? alert('D')
    : input < 50 ? alert('F')
    : alert('Error')