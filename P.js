const Product = (array) => {
  let left = 1;
  let final = [];
  for (let i = 0; i < array.length; i++) {
    final[i] = left;
    left = left * array[i];
  }
  let right = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    final[i] = final[i] * right;
    right = right * array[i];
  }
  return final;
};
console.log(Product([1, 2, 4, 6]));
