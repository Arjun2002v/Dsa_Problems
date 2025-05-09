const mostOnes = (array) => {
  let max = 0;
  let current = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      current++;
      if (current > max) {
        max = current;
      }
    } else {
      current = 0;
    }
  }
  return max;
};
console.log(mostOnes([0, 1, 1, 0, , 1]));
