const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];

function updateTask(id, newName) {
  let result = tasks.find((item) => item.id === id);
  result.name = newName; // because same address
}

console.log(updateTask(2, 'Travelling'));

console.log(tasks);
