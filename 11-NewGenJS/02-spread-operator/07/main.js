function cloneArray(obj) {
  const cloneArr = { ...obj };
  return cloneArr;
}

const obj = { name: 'First', Price: 6 };

cloneArray(obj);

// const cloneObj = obj => ({...obj})
