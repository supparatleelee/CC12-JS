const button = document.querySelector('button');
button.addEventListener('click', () => alert('1')); // (1) // this one
button.removeEventListener('click', () => alert('1')); // (2)
// มันจบในตัวมันเอง ในบรรทัดของมัน มันเลยไม่กระทบกับข้อ 1 และ 3 ไม่เลยไม่ remove มันแยกคนละส่วน
button.onclick = () => alert(2); // (3) //and this one
