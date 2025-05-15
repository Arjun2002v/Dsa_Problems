const maxArray = (num) => {
  // Initialize 'max' with the first element of the array
  // This will keep track of the maximum subarray sum found so far
  let max = num[0];

  // Outer loop - starting index of the subarray
  for (let i = 0; i < num.length; i++) {
    let sum = 0; // Initialize sum for each new subarray starting from index i

    // Inner loop - ending index of the subarray
    for (let j = i; j < num.length; j++) {
      sum += num[j]; // Add the current element to the sum

      // Update max if the current sum is greater than the previous max
      if (sum > max) {
        max = sum;
      }
    }
  }

  // Return the maximum subarray sum found
  return max;
};

console.log(maxArray([1, 2, -4, 3, 5, 1, 8]));
// The function prints the maximum sum of any continuous subarray in the input array.
