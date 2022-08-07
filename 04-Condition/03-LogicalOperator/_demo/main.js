// logical OR with Default Value
// prompt ==> string 
// prompt ==> null

// let username = prompt("Enter username") || "Guest"

// console.log("username",username)

// logical AND

let username = prompt("Enter username") 

username.trim() && alert(username)
// "John" && alert("John")
// null && alert() // not alert
// "" && alert() // not alert


// ###################################
// OR ==> First truthy
// let a = '' || "CC" || null || 50
// a

// OR ==> Last (all false)
// let b = '' || undefined || null
// b

// let a = '' && undefined && 0;
// let b = undefined && 0 && "";
// console.log(b)
// Boolean("")
// Boolean(" ")

// null === null

// Number("Codecamp")

isNaN(NaN)
isNaN("0")
isNaN("C  C")