const Linear = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return false;
};

console.log(Linear([1, 2, 10, 11, 5], 11));
