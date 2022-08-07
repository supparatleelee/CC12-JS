if (-1 || 0) alert("first");
// true || false
// worked
if (-1 && 0) alert("second");
// true && false
// didn't work because if one of the operands is false, this condition will not work.
if (null || (-1 && 1)) alert("third");
// false || 1 -> true
//Worked