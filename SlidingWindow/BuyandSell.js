const BuyandSell = (array) => {
  let right = 1;
  let left = 0;
  let max = 0;

  while (right < array.length) {
    if (array[right] > array[left]) {
      let profit = array[right] - array[left];
      if (max < profit) {
        max = profit;
      }
    } else {
      left = right;
    }
    right++;
  }
  return max;
};
console.log(BuyandSell([4, 2, 1, 5, 7]));

// STEPS TO PERFORM THE PROBLEM

// Step 1: Initialize left and right pointers to 0 and 1, respectively.
// Step 2: Initialize a variable max to 0 to store the maximum profit.
// Step 3: Loop through the array from index 1 to the end.
// Step 4: Check if the current element at index right is greater than the current element at index left.
// Step 5: If true, calculate the profit by subtracting the value at index left from the value at index right.
// Step 6: If the calculated profit is greater than the current value of max, update max to the profit.
// Step 7: Otherwise, update left to the current value of right.
// Step 8: Increment right by 1.
// Step 9: Return the maximum profit.

// Time Complexity: O(n), where n is the length of the input array.
// Space Complexity: O(1), as no additional data structures are used.
