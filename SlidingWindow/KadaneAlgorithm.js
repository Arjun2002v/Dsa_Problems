const Kadane = (array) => {

  // Initialize both trackers with the first element of the array
  // max -> stores the best (maximum) subarray sum found so far
  // temp -> stores the running sum of the subarray ending at the current index
  let max = array[0];
  let temp = array[0];

  // Start from index 1 since index 0 is already used to initialize max/temp
  for (let i = 1; i < array.length; i++) { 

    // Decide whether to extend the previous subarray or start a new one here
    if (temp + array[i] > array[i]) {
      // Extending the previous subarray gives a bigger sum, so keep extending
      temp = temp + array[i];
    } else {
      // Starting fresh from the current element gives a bigger (or equal) sum
      temp = array[i];
    }

  }

  // Check if the final running sum is bigger than the max found so far
  if (temp > max) {
    max = temp;
  }

  // Return the maximum subarray sum
  return max;

}

console.log(Kadane([-4 - 3, -1, 1, 2, 5])); // Output: 6 (from subarray [2, 4])