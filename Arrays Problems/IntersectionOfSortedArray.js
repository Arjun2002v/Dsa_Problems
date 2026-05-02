const intersection = (arr1, arr2) => {
  // Result array to store common elements
  const result = [];

  // Two pointers
  let i = 0;
  let j = 0;

  // Traverse both arrays
  while (i < arr1.length && j < arr2.length) {
    // If elements match, add to result and move both pointers
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } 
    // If element in arr1 is greater, move pointer in arr2
    else if (arr1[i] > arr2[j]) {
      j++;
    } 
    // Otherwise, move pointer in arr1
    else {
      i++;
    }
  }

  // Return final intersection array
  return result;
};

// Example usage
console.log(intersection([1, 2, 3, 5, 6], [2, 3, 4, 5, 6]));