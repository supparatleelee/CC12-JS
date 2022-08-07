// set only stores data that is not the same.
const set = new Set();
set.add('Thailand');
set.add('Japan');
set.add('Thailand');
set.add('China');
set.add('India');
set.add('Thailand');
set.add('China');
set.add('Singapore');
set.add('Japan');
set.delete('India');
set.size;
const array = Array.from(set);
console.log(array);
