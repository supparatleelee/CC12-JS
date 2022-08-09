const btn = document.getElementsByTagName('button')[0];
const input = document.getElementsByTagName('input')[0];

btn.addEventListener('click', () => {
  if (input === '') {
    input.style.border = '1px solid red';
    const requiredText = (document.createElement('h4').innerHTML =
      'Phone Number is required');
  } else if (typeof input !== 'number') {
    input.style.border = '1px solid red';
    const requiredText = document.createElement('h4');
    requiredText.innerHTML = 'Phone Number is invalid';
  } else if (input.length < 10) {
    input.style.border = '1px solid red';
    const requiredText = document.createElement('h4');
    requiredText.innerHTML = 'Invalid length';
  } else {
    alert('Your number is valid');
  }

  input.append(requiredText);
});
