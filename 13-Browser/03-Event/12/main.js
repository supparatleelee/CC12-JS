// select add button
const btnAdd = document.querySelector('.btn-add');

// when click add button -> add new list to li
btnAdd.addEventListener('click', function () {
  // = get target.value
  const input = document.querySelector('input'); // cuz there is only one input
  const newValue = input.value;
  const ul = document.querySelector('ul');

  // = when click add -> that value add to the li list
  //   const html = `<li>
  //                 <span> ${newValue} </span>
  //                 <button class="btn-edit">Edit</button>
  //                 <button class="btn-delete">Delete</button>
  //                 </li>`; //Insert adjacent

  //   const ul = document.querySelector('ul');
  //   ul.insertAdjacentHTML('beforeend', html);

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = newValue;

  const btnEdit = document.createElement('button');
  btnEdit.className = 'btn-edit';
  btnEdit.innerHTML = 'Edit';

  //addeventlistener in order to do what we want it to do like add / delete
  btnEdit.addEventListener('click', function () {
    console.log('Edit');
    const newValue = prompt('Enter New Text'); // same name but different scope = ok
    // need to selete innerHTML in span
    const span = this.previousElementSibling;
    span.innerHTML = newValue;
  });

  const btnDelete = document.createElement('button');
  btnDelete.className = 'btn-delete';
  btnDelete.innerHTML = 'Delete';

  btnDelete.addEventListener('click', function () {
    console.log('Delete');
    const li = this.parentElement;
    li.remove();
  });

  li.append(span); // li, span , /li
  li.append(btnEdit); // li, span , edit button, /li
  li.append(btnDelete); // li, span , edit button, delete button, /li

  ul.append(li);
  input.value = '';
});
