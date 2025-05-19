const Largest = (array) => {
  let Largest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > Largest) {
      Largest = array[i];
    }
  }
  return Largest;
};

console.log(Largest([1, 23, 54, 3, 44]));
