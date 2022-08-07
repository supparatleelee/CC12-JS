// Main Function === has call back
function checkPermission(role, yes, no) {
    if (role === 'ADMIN') {
        yes()
    } else {
        no()
    }
}

//call back : YES
function accessGranted() {
    alert('ACCESS GRANTED')
}

//Call back : No
function accessDenied() {
    alert('ACCESS DENIED')
}


checkPermission("ADMIN", accessGranted, accessDenied)