- จงสร้าง \<ul>
- เขียนคำสั่ง prompt เพื่อรับข้อความ
- นำข้อความที่ได้มาสร้าง \<li> และ เพิ่มเข้าไปใน \<ul>
- เพิ่มไปเรื่อยๆจนกว่าผู้ใช้จะกด Cancel หรือ พิมพ์ข้อความว่าง
จงเขียนฟังก์ชัน clear(elem) เพื่อลบ \<li> ภายใน \<ol> ทั้งหมด


```html
<ol id="elem">
  <li>Hello</li>
  <li>World</li>
</ol>
<script>
  function clear(elem) { /* your code */ }
  clear(elem); // clears the list
</script>


```