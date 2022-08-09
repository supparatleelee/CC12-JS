const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

const genderGroup = persons.reduce((acc, item) => {
  acc[item.sex] ? acc[item.sex].push(item.name) : (acc[item.sex] = [item.name]);

  return acc;
}, {});

console.log(genderGroup);
