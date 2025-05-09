const uniqueNumber = (array) => {
  const frequency = {};
  for (let num of array) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  for (let num in frequency) {
    if (frequency[num] === 1) {
      return num;
    }
  }

  console.log(frequency);
};
console.log(uniqueNumber([1, 1, 5, 3, 3, 4, 4]));
