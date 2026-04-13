const LinearSearch = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1; // if not found
};

console.log(LinearSearch([5, 2, 4, 1, 2], 4)); // Output: 2

// 1. Iterate though the array 
// 2. Check for the target number in the array 
// 3. Return the specific index of that array 
// 4. Else return -1 