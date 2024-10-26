const rotateArrayInPlace = (arr, k) => {
  const n = arr.length;
  k = k % n; // Normalize k if it's larger than the array length

  // Helper function to reverse part of the array
  const reverse = (start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
      start++;
      end--;
    }
  };

  // Step 1: Reverse the entire array
  reverse(0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the remaining n - k elements
  reverse(k, n - 1);

  return arr;
};

console.log(rotateArrayInPlace([1, 2, 3, 4, 5], 3));


