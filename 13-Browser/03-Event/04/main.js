const aTag = document.querySelector('a');
aTag.addEventListener('click', function (event) {
  event.preventDefault();
  const redirect = confirm('Leave for https://google.com?');
  if (redirect) {
    // = true
    location.href = 'https://google.com';
  }
});
