const Longest = (array) => {
  let count = 0;
  let number = array.length;
  for (let i = 0; i < number; i++) {
    for (let j = i + 1; j < number; j++) {
      if (array[j] - array[i] === 1) {
        count++;
      }
    }
  }
  return count;
};
console.log(Longest([1, 8, 2, 7, 3, 4]));
