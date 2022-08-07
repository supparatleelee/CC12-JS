function makeWorker() {
    let name = 'Pete';
    return function () {
      alert(name);
    };
  }
  let name = 'John';
  let work = makeWorker();
  work(); // * // Pete cuz value in the function