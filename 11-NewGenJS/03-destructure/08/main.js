function checkAge(user) {
  let { age } = user;
  if (age > 18) {
    console.log(`Hello, ${user.firstName} ${user.lastName}`);
  } else {
    console.log('No Permission');
  }
}

const user = {
  firstName: 'Supparat',
  lastName: 'T',
  age: 20,
};

checkAge(user);
