let input = +prompt('Enter Number');

if (input % 2 == 0) {
  alert('Even Number');
} else {
  alert('Odd Number');
}

// still need to make sense of input === null || input === '' || input.trim() === '' blah blah. why it can't run twice??