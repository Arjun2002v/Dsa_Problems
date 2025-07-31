const Chunking = (array, k) => {
  let temp = [];
  let result = [];
  for (let i = 0; i < array.length; i++) {
    temp.push(array[i]);
    if (temp.length === k) {
      result.push(temp);
      temp = [];
    } else if (temp.length > 0) {
      result.push(temp);
    }
  }
  return result;
};
console.log(Chunking([1, 2, 3, 4, 5], 2));
