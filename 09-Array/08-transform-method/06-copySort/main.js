let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

function copySorted(arr) {
  let newarr = arr.slice(0, 3);
  return newarr.sort();
}

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
