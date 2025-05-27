const Product = (array) => {
  let length = array.length;
  let final = [];

  // Step 1: Build the "left product" array
  let left = 1;
  for (let i = 0; i < array.length; i++) {
    final[i] = left;
    left = left * array[i];
  }

  let right = 1;
  for (let i = length - 1; i >= 0; i--) {
    final[i] = final[i] * right;
    right = right * array[i];
  }

  return final;
};

console.log(Product([1, 2, 3, 4])); // Output: [24, 12, 8, 6]

// STEPS TO PERFORM THE PROBLEM

// Step 1: Build the "left product" array
// Store product of all elements to the left of index i
// Update left product for next index

// Step 2: Multiply with the "right product" from the end
// Multiply current value with the product of all elements to the right
// Update right product for next element to the left
