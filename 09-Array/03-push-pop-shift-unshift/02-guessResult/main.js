let arr = ["a", "b"];

arr.push(function() {
  alert(this);
})

arr[2](); // *
//function()
// alert(array)