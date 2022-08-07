const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];

function deleteTask(id) {
  let result = tasks.findIndex((item) => item.id === id);

  tasks.splice(result, 1); // automatically input the index of the result (?)
}

deleteTask(1);
console.log(tasks);
