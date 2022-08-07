// ################# DEMO-0

function a(){
    console.log(this)
}

a(); // this === window object
window.a() // this === window object

let b = function () {
    console.log(this)
}

//b(); // this === window object
//window.b() // this === window object

// Arrow Function
var c = () => console.log(this)
//c() // this === window object
window.c() //

// let c = {
//     name : "codecamp",
//     age :  12,
//     increase : function (){
//         console.log("IN METHOD INCREASE",this)
//         this.age += 1;
//     },
//     decrese : function () {
//         console.log("IN METHOD DECREASE",this)
//         this.age -= 1;
//     }
// }

// c.increase()
// console.log(c)
// c.decrese()
// console.log(c)

// ################# DEMO-1

// function foo() {
//   console.log(this.bar);
// }
// var bar = "global";
// let obj1 = { bar: "obj1", foo: foo };
// let obj2 = { bar: "obj2", foo:foo};
// let obj3 = { bar: "obj3"}
// // --------

// // console.log(window)
// foo(); // "global"
// obj1.foo() // 'obj1'
// obj2.foo() // 'obj2'
// foo.call(obj3) // 'obj3'


// ###################### DEMO-2 

// let user = {
//     name: 'John',
//     age: 30,
//     sayHi() {    
//       alert(this.name);
//     }
//   };
//   // this is object before the dot
//   user.sayHi(); // John



// ###################### DEMO-3
// let user = { name: "John" };
// let admin = { name: "Admin" };
// function sayHi() {
//   alert( this.name );
// }
// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;
// // these calls have different this
// // "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)


// ###################### DEMO - 4 : ARROW

// var firstName = "John"
// let sayHi = () => console.log(this.firstName)

// // function myFunc () {
// //     return console.log(this.firstName)
// // }

// let user = {
//     firstName: 'Ilya',
//     sayHi : sayHi,
//   };


// sayHi() // window
// user.sayHi(); // window

// ########################## DEMO - 5 : ARROW

// 'use strict';

// const obj = { // does not create a new scope
//   i: 10,
//   b: () => console.log(this.i, this),
//   c() {
//     console.log(this.i, this);
//   },
// }
// obj.b(); // prints undefined, Window { /* … */ } (or the global object)
// obj.c(); // prints 10, Object { /* … */ }


// ######################### DEMO - 6


// let user = {
//     firstName: 'Ilya',
//     sayHi: function () {
//       let arrow = () => console.log(this.firstName);
//       arrow();
//     }
//   };
//   user.sayHi(); // Ilya


//########################## DEMO - 7


// const toString = Object.prototype.toString;

// const o = {
//   foo: () => console.log("foo", this),
      
//   bar() {
//     const baz = () => console.log("bar", this);
//     baz();
//   }
// }

// o.foo() // logs window [object Window]
// o.bar() // logs o [object Object]



// ######################### MY EXPERIMENT - 1

// function f1() {
    
//     return this;
//   }

//   console.log(f1()) // window
//   console.log(window.f1()) 

// function f2() {
//     'use strict'; // see strict mode
//     return this;
//   }

//   console.log(f2()) // undefined
//   console.log(window.f2())


// ######################### MY EXPERIMENT - 2

// An object can be passed as the first argument to call
// or apply and this will be bound to it.
// const obj = { a: 'Custom' };

// // Variables declared with var become properties of the global object.
// var a = 'Global';

// function whatsThis() {
//   return this.a;  // The value of this is dependent on how the function is called
// }

// console.log(whatsThis());          // 'Global' as this in the function isn't set, so it defaults to the global/window object in non–strict mode
// console.log(whatsThis.call(obj));  // 'Custom' as this in the function is set to obj



// ################## LOSING THIS

// const o = {
//     m() { console.log(this) }
//   }
  
//   // the important patterns: applying methods
  
//   o.m(); // logs o
//   o["m"](); // logs o

// "use strict";

// const o = {
//   m() { console.log(this) }
// }

// // m is passed to f as a callback
// function f(m) { m() }

// // another important pattern: passing methods

// f(o.m); // logs undefined
// f(o["m"]); // logs undefined