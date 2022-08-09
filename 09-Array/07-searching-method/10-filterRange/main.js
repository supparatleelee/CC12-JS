function filterRange(arr, a, b) {
  const array = arr.filter((item) => item > a && item < b);
  return array;
}

const array = [1, 3, 5, 7, 8];
filterRange(array, 3, 8);
