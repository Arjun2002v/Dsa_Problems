// Step to Perform the Problem

// 1.Take two parameters num and a target
// 2. create a variable which the length of the array
//3. If the K is bigger than the array length then u can normalize with help of %
// 4.Helper function to reverse part of the array with two pointers start and end
// 4.1 While start is less than end
// 4.2 Swap elements
// 4.3 Increment start and decrement end

// 5.Reverse the entire array
// 6.Reverse the first k elements
// 7.Reverse the remaining n - k elements

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
