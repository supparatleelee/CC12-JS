const button1 = document.getElementById('button1');
console.log(button1); // selected correct.

// DOM property
button1.onclick = () => {
  alert('Form is submitted');
};

//addEventListener
button1.addEventListener('click', () => alert('Form is submitted'));
