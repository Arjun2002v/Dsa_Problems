const Product = (array) => {
  let length = array.length;
  let final = [];

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
//Update the final array with the value of left
// Update the left by multiplying the left with the current array[i]
//

// Step 2: Multiply with the "right product" from the end
//Update the final array with the product of the current final[i] and array[right]
// Update the right by multiplying the right with the current array[i]
