Array.prototype.max = function () {
  return this.reduce(
    (max, current) => (max < current ? current : max),
    -Infinity
  );
};

Array.prototype.sum = function () {
  return this.reduce((sum, current) => sum + current, 0);
};

console.log([1, 3, 5, 6, 11, -2, 44, 123, 51, 121, 31].max());
console.log([1, -2, 3, -4, 5, -6, 7].sum());
