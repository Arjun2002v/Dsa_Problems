const Missing = (array, k) => {
  const num = array.length;
  const targert = k % num;
  for (let i = 0; i > targert; i++) {
    let last = array[num - 1];
    for (let j = num - 1; j > 0; j--) {
      array[j] = array[j - 1];
    }
    last = array[0];
  }
  return array;
};
console.log(Missing([1, 2, 3, 4, 6], 2));
