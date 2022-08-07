
// Function Declaration
// function sayHi(word) {
//     //   do something
//       return;
//     }
    
    
//     // Call,Invoke,Execute === Function Result
//     sayHi("CodeCamp")
//     sayHi("This day is Holiday")
    
    
    
//     function addNumber(a,b){
//       let result = a+b;
//       console.log(b)
//       return result
//     }
    
//     addNumber(5,7)
//     addNumber(10,500)
//     addNumber(5)
    
    
// INNER SCOPE
// function showMessage() {
//     let message = 'Hello everyone!';
//     alert(message);
//   }
  
//   showMessage(); // Hello everyone!
//   alert(message); // 


// OUTER SCOPE

// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// showMessage(); // Hello, John


// SCOPE
// let userName = 'John';
// function showMessage() {
//   let userName = "Bob"; // declare a local variable
//   let message = 'Hello, ' + userName; // Bob
//   alert(message);
// }
// alert(userName)
// showMessage(); // the function will create and use its own userName
// alert(userName); // John, unchanged, the function did not access the outer variable

// MODIFY GLOBAL

let userName = 'John';
function showMessage() {
   userName = "Bob"; // declare a local variable
  let message = 'Hello, ' + userName; // Bob
  alert(message);
}
alert(userName)
showMessage(); // the function will create and use its own userName
alert(userName); // John, unchanged, the function did not access the outer variable


function observeReturn (num) {
    if(num>0) {
      console.log("BEFORE")
      return num;
      console.log("AFTER")
    }
  }
  
  observeReturn(10)
  