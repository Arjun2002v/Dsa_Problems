const Leader = (array) => {
  // Store the leaders we find
  let result = [];

  // Start from the last element
  // The last element is always a leader
  let last = array[array.length - 1];

  // Push the last element into the result
  result.push(last);

  // Traverse the array from right to left
  // We start from the second-last element because
  // the last element is already considered
  for (let i = array.length - 2; i >= 0; i--) {
    // If the current element is greater than
    // the largest element we have seen on its right,
    // then the current element is a leader
    if (array[i] > last) {
      // Add the current element to the leaders
      result.push(array[i]);

      // Update last because this is now
      // the largest element seen from the right
      last = array[i];
    }
  }

  // Since we traversed from right to left,
  // the leaders are currently in reverse order
  // So reverse them before returning
  return result.reverse();
};

console.log(Leader([16, 17, 4, 3, 5, 2]));
