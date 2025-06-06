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

//Step to Perform thr problem
//1. Declare varaibales to store right,left,max
//2. Make a set to keep track of the elements being added
//3. If in the set it is there then increemetn right pointer
