/*
typeof "x"; // string
typeof x; // undefined - have not declared it yet
typeof ``; // string
typeof Infinity; // Number - Infinity
typeof (100 / 0); // Number - Infinity - if used calculator, it will also show error
typeof (1 + "3"); // string - 13
typeof (1 \* "a"); // number - NaN
typeof null; // object - bug

//null is not an object, it is a primitive value. For example, you cannot add properties to it. Sometimes people wrongly assume that it is an object, because typeof null returns "object". But that is actually a bug (that might even be fixed in ECMAScript 6).
*/