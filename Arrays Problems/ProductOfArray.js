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

//1. Calculate product of array left to right
//2. Create a final array to store every result
//3. Loop through the array and  with final[i] being the left variable and then multiply the left with the array[i]
//4. Same thing for the right side from right to left side
//5 And return the final output array
