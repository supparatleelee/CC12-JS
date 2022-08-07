const notebook = {
  brand: 'ASUS',
  model: 'Vivobook D413IA-EB303TS',
  processor: 'AMD Ryzen 7 4700U 3.6GHz',
  graphics: 'Integrated Graphics : AMD Radeon Graphics',
  ram: '8GB DDR4 Onboard',
  storage: '512GB PCIe NVMe M.2 SSD',
};

// #01
const newObject1 = {};

for (let key in notebook) {
  newObject1[key] = notebook[key];
}

console.log(newObject1);

// #02
const newObject2 = Object.assign({}, notebook);

console.log(newObject2);

//there are many ways to clone object. usually, they use another way to clone object (which we will learn when study ES6), but these 2 ways that we just learned is for debugging because sometimes people still use this kind of way.
