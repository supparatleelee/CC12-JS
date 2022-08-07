let arr = ['Apple', 'Orange', 'Pear'];

let Console = function(item, index, array) {
  console.log(item + ' ' + item)
}

arr.forEach(Console)

// 'Apple Apple'
// 'Orange Orange'
// 'Pear Pear'