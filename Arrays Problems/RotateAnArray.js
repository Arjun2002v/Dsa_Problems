const Rotate = (array, k) => {
  const n = array.length;
  k = k % n;
  const rotate = (start, end) => {
    while (start < end) {
      [array[start], array[end]] = [array[start], array[end]];
      start++;
      end--;
    }
  };
  rotate(0, n - 1);
  rotate(0, k - 1);
  rotate(k, n - 1);
  return array;
};
console.log(Rotate([1, 2, 3, 4, 5, 6, 7], 3));

//Step to Solve the Problem
