บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer); // *
console.log(answer(1337)); // **
console.log(magic(1337)(42)); // ***
```
