const Reverse = (array) => {
  //Using Two Pointer Approach we reverse the array
  let left = 0;
  let right = array.length - 1;
  if (left < right) {
    let temp = array[left]; // temp to store the left element to later on swap it
    array[left] = array[right];
    array[right] = temp;
    right--;
    left++;
  }
  return array;
};
console.log(Reverse([1, 2, 3, 4]));
