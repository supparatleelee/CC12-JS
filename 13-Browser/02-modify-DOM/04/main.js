// Edit Style
setTimeout(() => {
  document.querySelector('.btn').style.backgroundColor = 'red';
  setTimeout(() => {
    document.querySelector('.btn').style.backgroundColor = '';
  }, 3000);
}, 3000);

//Add and Remove Class
setTimeout(() => {
  document.querySelector('.btn').classList.toggle('red');
  setTimeout(() => {
    document.querySelector('.btn').classList.toggle('red');
  }, 3000);
}, 3000);
