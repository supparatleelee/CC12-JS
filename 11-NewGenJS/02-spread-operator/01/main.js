const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const newArr = [5, ...nums1, -6, -1, ...nums2];

let sum = 0;
newArr.forEach((item) => (sum += item));

console.log(sum);
