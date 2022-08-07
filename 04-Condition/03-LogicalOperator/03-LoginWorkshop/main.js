let inp = prompt('Enter your name');
let user;
let password;

if (inp === null || inp.trim() === '') {
    user = inp ?? 'Guest'
    alert(`Welcome ${user}`)
} else if (inp === 'codecamp') {
    password = prompt('Enter your password')

    if (password === '123456') {
        user = inp
        alert(`Welcome ${user}`)
    } else if (password !== '123456') {
        alert('Wrong Password')
    }
} else {
    user = 'Guest'
    alert(`Welcome ${user}`)
}
