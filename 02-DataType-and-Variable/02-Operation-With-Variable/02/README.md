ให้ระบุค่าของ a, b, c , d และ e หลังจากจบการทำงานในแต่ละ statements

```js
let a = 1; // a = 1
let b = 2; // a = 1, b = 2
let c = a++; // a = 2 cuz it use the a var first ค่าไปใช้ก่อน แล้วค่อยมา update ตัวเอง, b = 2, c = 1
let d = ++c; // a = 2, b = 2, c = 2, d = 2 เพราะว่าอันนี้ update ก่อนที่จะใช้ c
let e = ++d + d++ + d; // 3 + 3 + 4 = 10
```
