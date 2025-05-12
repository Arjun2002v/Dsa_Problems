const Rotate = (array, target) => {
  let k = target % array.length;
  for (let i = 0; i < k; i++) {
    // storing the last element in a variable
    let last = array[array.length - 1];
    // second loop to bring all the elements left of their original position
    for (let j = array.length - 1; j > 0; j--) {
      array[j] = array[j - 1];
    }
    array[0] = last;
  }
  return array;
};
console.log(Rotate([1, 2, 3, 4, 5], 1));
