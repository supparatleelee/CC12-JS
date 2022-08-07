let username = prompt('Username')
let password = prompt('Password')

if (username === null || username.trim() === '') {
  alert('username is required')
  if (password === null || password.trim() === '') {
  	alert('username is required')
  }
} else if (username === 'admin' && password === '1234' || username === 'john' && password === 'qwerty') {
  alert(`Hello, ${username}`)
} else {
  alert('Invalid username or password')
}

// num === null in case the user click cancle.
// num.trim() === '' in case the user type white space so .trim() it to be '' empty value