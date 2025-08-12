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

//1. write a rotate function which can be reused, swap [start,end] = [end,start]
//2. then  first rotate 0 to n-1
//3 . then first k elements 0 to k
//4 then at last the remaining k to n-1 elements
