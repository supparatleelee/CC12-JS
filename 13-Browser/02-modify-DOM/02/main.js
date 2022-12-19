let newUl = document.createElement('ul');

while (true) {
  let input = prompt('');
  if (input === null || input.trim() == '') {
    break;
  }
  let newLi = document.createElement('li');
  newLi.innerHTML = input;
  newUl.append(newLi);
}
document.body.append(newUl);
