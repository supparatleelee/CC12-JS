บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const sender = "Matt";

function sendTo(from, to) {
  console.log(`From ${from} to ${to}`);
}

sendTo(sender, "Sarah"); // *
sendTo(null); // **
```

```js
const sender = "Matt";

function sendTo(to, from = "CC") {
  console.log(`From ${from} to ${to}`);
}

sendTo("Max"); // ***
sendTo("Ben", "Jay"); // ****
```
