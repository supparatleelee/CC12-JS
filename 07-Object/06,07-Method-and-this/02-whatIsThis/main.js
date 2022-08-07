var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); // *

// Joe
// beacuse user has no name variable => looking for other global variables (John is block scope = only in its function)

// user.ref = this = window
// then this.name === 'Joe'