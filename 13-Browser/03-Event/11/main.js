// Lab 4.11
const btnAdd = document.querySelector('.btn-add');
const btnSubtract = document.querySelector('.btn-subtract');
const btnReset = document.querySelector('.btn-reset');
const count = document.querySelector('span');

btnAdd.addEventListener('click', function () {
  count.innerHTML = +count.innerHTML + 1;
});

btnSubtract.addEventListener('click', function () {
  if (count.innerHTML !== '0') {
    count.innerHTML = +count.innerHTML - 1;
  }
});

btnReset.addEventListener('click', function () {
  count.innerHTML = 0;
});
