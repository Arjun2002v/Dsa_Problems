const Waters = (array) => {
  let total = 0; // Total amount of trapped water
  let leftMax = 0; // Tracks the maximum height from the left
  let rightMax = 0; // Tracks the maximum height from the right
  let left = 0; // Left pointer starting from the beginning
  let right = array.length - 1; // Right pointer starting from the end

  while (left < right) {
    // Loop until the two pointers meet
    if (array[left] < array[right]) {
      // Process the smaller height side first
      if (array[left] >= leftMax) {
        leftMax = array[left]; // Update leftMax if current is greater
      } else {
        total += leftMax - array[left]; // Add trapped water from left side
      }
      left++; // Move left pointer inward
    } else {
      if (array[right] >= rightMax) {
        rightMax = array[right]; // Update rightMax if current is greater
      } else {
        total += rightMax - array[right]; // Add trapped water from right side
      }
      right--; // Move right pointer inward
    }
  }

  return total; // Return the total trapped water     
};

console.log(Waters([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
