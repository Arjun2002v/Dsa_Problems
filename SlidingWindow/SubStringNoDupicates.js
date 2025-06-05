const NoDuplicates = (array) => {
  let right = 0;
  let left = 0;
  let max = 0;
  let set = new Set();

  while (right < array.length) {
    if (!set.has(array[right])) {
      set.add(array[right]);
      right++;
      let length = right - left + 1;
      if (length > max) {
        max = length;
      }
    } else {
      left++;
    }
  }
  return max;
};
console.log(NoDuplicates("pwwkew"));
