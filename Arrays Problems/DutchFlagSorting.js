const DutchFlags = (array) => {
  let mid = 0;
  let left = 0;
  let right = array.length;

  while (mid <= right) {
    if (array[mid] === 0) {
      [array[left], array[mid]] = [array[mid], array[left]];
      left++;
      mid++;
    } else if (array[mid] === 1) {
      mid++;
    } else {
      [array[mid], array[right]] = [array[right], array[mid]];
      right--;
    }
  }

  return array;
};
console.log(DutchFlags([2, 0, 0, 1, 2, 1]));
