const nickname = document.querySelector('input');
const job = document.querySelectorAll('input')[1];

nickname.addEventListener('click', function (event) {
  console.log(event.target.name);
});
job.addEventListener('click', function (event) {
  console.log(event.target.name);
});
nickname.addEventListener('input', function (event) {
  console.log(event.target.value);
});
job.addEventListener('input', function (event) {
  console.log(event.target.value);
});

//The target event property returns the element that triggered the event.
