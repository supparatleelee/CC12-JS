function refeactor1(age) {
    age = +prompt('Enter Your Age')
    //if goes to if
    if (age > 18) {
        return true
    }
    // if not, then do this
    return confirm('Did parents allow you?')
}
refeactor1()

function refeactor2(age) {
    age = +prompt('Enter Your Age')
    return age > 18 ? true : confirm('Did parents allow you?')
}
refeactor2()

function refeactor3(age) {
    age = +prompt('Enter Your Age')
    return age > 18 || confirm('Did parents allow you?')
    // if the first one is false, it will return the last one.
}
refeactor3()

//confirm() -> ok = return true, cancel = return false.