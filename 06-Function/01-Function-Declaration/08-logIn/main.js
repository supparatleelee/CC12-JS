function login(username, password) {
    username = prompt('Enter Username')
    password = prompt('Enter Password')

    if (username === 'admin' && password === 'P@ssw0rd') {
        alert('Successfully Login')
    } else {
        alert('Error')
    }
}

login()