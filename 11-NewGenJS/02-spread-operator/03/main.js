function infoInput(firstName, lastName, ...hobbies) {
  let result = [firstName, lastName, ...hobbies];
  return result;
}

const info = ['Supparat', 'T', 'Reading', 'Music', 'Sleep'];

infoInput(...info);
// at first I didn't put ... before info
// So, it thought [] = firstName only
// OR seperate info into firstName, lastName, reading, sleep... like this
