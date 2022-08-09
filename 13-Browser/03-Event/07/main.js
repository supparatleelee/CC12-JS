//select
const btn = document.querySelector('button');
//addeventlistener to define the event & what we gonna do when it happens
btn.addEventListener('click', function () {
  //select the text & modify
  const text = document.querySelector('h1');
  text.style.display = 'none';
});
