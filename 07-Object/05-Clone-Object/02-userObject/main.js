const state1 = { username: 'john', point: 100, loading: true };

const newState = Object.assign({}, state1, { loading: false });

console.log(newState);
//clone + merge
