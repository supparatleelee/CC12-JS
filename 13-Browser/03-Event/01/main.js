// Lab 4.1
const button = document.querySelector('button');
button.addEventListener('click', () => alert('1')); // (1)
button.removeEventListener('click', () => alert('1')); // (2)
button.onclick = () => alert(2); // (3)