const clickbutton = document.getElementById('clickbutton');
console.log(clickbutton);

clickbutton.addEventListener('click', () => {
  clickbutton.style.display = 'none';
});
