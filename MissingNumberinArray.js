const Missing = (array) => {
  let num = array.length + 1;
  let result = (num * (num + 1)) / 2;
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return result - total;
};
console.log(Missing([1, 2, 3, 4, 6]));
