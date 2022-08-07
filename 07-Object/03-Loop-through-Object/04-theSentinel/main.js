const THE_SENTINEL = 'stop';

function createObjectFromInput() {
  const object = {};

  let key;
  let value;

  do {
    key = prompt('Enter key');
    value = prompt('Enter value');

    if (
      key !== null ||
      key.trim() !== '' ||
      (key !== THE_SENTINEL && value !== THE_SENTINEL)
    ) {
      object[key] = value; // add value to the key // same way as access the key's
    }
  } while (key !== THE_SENTINEL && value !== THE_SENTINEL);

  return object;
}

createObjectFromInput();
