const Water = (array) => {
  let water = 0;
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] < array[right]) {
      // If left bar is smaller
      if (array[left] >= leftMax) {
        leftMax = array[left]; // Update leftMax
      } else {
        water += leftMax - array[left]; // Add trapped water
      }
      left++; // Move left pointer
    } else {
      // If right bar is smaller or equal
      if (array[right] >= rightMax) {
        rightMax = array[right]; // Update rightMax
      } else {
        water += rightMax - array[right]; // Add trapped water
      }
      right--; // Move right pointer
    }
  }

  return water;
};

// ✅ Correct function call
console.log(Water([1, 2, 3, 1, 5, 3, 2])); // Output: Trapped water units
