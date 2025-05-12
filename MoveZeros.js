const zero = (array) => {
  let pointer = 0; // make a pointer to track the elements
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      array[pointer] = array[i]; // bring the non-zero to the beginning
      pointer++;
    }
    array[i] = 0; // convert rest of the elements to the zero
  }
  return array;
};

console.log(zero([0, 2, 3, 0, 1, 5]));
