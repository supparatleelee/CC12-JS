- จงสร้างฟังก์ชัน first(arr, n) ให้ return ค่าตามเงื่อนไขต่อไป
  -  n เป็น undefined หรือ 1 ให้ return element ตัวแรกของ arr
  -  n มากกว่า 1 ให้ return ค่าเป็น array ที่มี element ของ arr n ตัวแรก
- ตัวอย่างผลลัพธ์

```js
console.log(first([7, 9, 0, -2])); // 7
console.log(first([], 3)); // []
console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]
```