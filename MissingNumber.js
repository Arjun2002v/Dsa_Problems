const Missing = (array) => {
  let total = 0;
  let num = array.length + 1;
  let res = (num * (num + 1)) / 2;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return res - total;
};
console.log(Missing([1, 2, 3, 4]));
