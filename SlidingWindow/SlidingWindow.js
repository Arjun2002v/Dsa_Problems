const Sliding = (array, k) => {
  // If the array is smaller than window size, return null
  if (array.length < k) return null;

  let left = 0; // Left pointer of the window
  let right = 0; // Right pointer of the window
  let max = 0; // Variable to store the maximum sum
  let temp = 0; // Temporary sum of current window

  // Step 1: Create the first window of size 'k'
  while (right < k) {
    temp = temp + array[right]; // Add elements to temp
    right++;
  }

  // Store the sum of the first window as initial max
  max = temp;

  // Step 2: Slide the window one element at a time
  while (right < array.length) {
    // Subtract the element going out of the window
    // Add the element coming into the window
    temp = temp - array[left] + array[right];

    // Update max if current window's sum is greater
    if (temp > max) {
      max = temp;
    }

    // Move the window forward
    left++;
    right++;
  }

  // Return the maximum sum of any subarray of size 'k'
  return max;
};

// Example usage
console.log(Sliding([1, 3, 2, 4], 2)); // Output: 6 (from subarray [2, 4])

const sliding = (array, k) => {
  let left = 0;
  let right = 0;
  let temp = 0;
  let max = 0;
  while (right < k) {
    temp = temp + array[right];
    right++;
  }

  max = temp;

  while (right < array.length) {
    temp = temp - array[left] + array[right];
    if (temp > max) {
      max = temp;
    }
    left++;
    right--;
  }

  return max;
};
console.log(sliding([1, 3, 2, 4], 3));
