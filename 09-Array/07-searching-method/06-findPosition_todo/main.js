const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];
// expexted result: 1

let result = tasks.findIndex((item) => item.id === 2);

console.log(result);
