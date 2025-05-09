const zero = (array) => {
  let pointer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      array[pointer] = array[i];
      pointer++;
    }
  }
  for (i = pointer; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
};
console.log(zero([1, 0, 2, 3, 0]));
