ให้เขียนฟังก์ชันด้านล่างให้อยู่ในรูปแบบ Arrow Function

```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask('Do you agree?', 
  function () { alert('You agreed.'); },
  function () { alert('You canceled the execution.'); }
);

```