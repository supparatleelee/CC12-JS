const employees = {
  john: {
    salary: 1000,
    address: { district: 'Ratchathewi', province: 'Bangkok' },
  },
  peter: {
    salary: 1500,
    address: { district: 'Pathumwan', province: 'Bangkok' },
  },
  mike: {
    salary: 800,
    address: { district: 'Pakkret', province: 'Nonthaburi' },
  },
  sarah: {
    salary: 2200,
    address: { district: 'Sriraja', province: 'Chonburi' },
  },
};

for (let key in employees) {
  console.log(key);
}

let input = prompt('Enter Employee Name');

for (let key in employees) {
  if (input == key) {
    console.log(key);
  } else {
    console.log('Not Found');
  }
}

// why input == key, but still log 'Not Found' ???
