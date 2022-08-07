// Lab 4.4
const aTag = document.querySelector('a');
aTag.addEventListener('click', function (event) {
  event.preventDefault();
  const redirect = confirm('Leave for https://google.com?');
  if (redirect) {
    location.href = 'https://google.com';
  }
});
