let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// INPUT : Object
// OUTPUT : sum of salaries ==> number
function calSalaries(obj) {
  let sum = 0;

  //declare key name by declaration
  for (let key in obj) {
    let currentSalaries = obj[key]; // access key's value -> object.John , obj.Ann , obj.Pete per one loop accordingly
    // a bit wasting the memory because we declare currentSalaries evey loops
    sum += currentSalaries;
  }

  return sum;
}

calSalaries(salaries);
