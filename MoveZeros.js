const zero = (array) => {
  let pointer = 0; // make a pointer to track the elements
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      array[pointer] = array[i]; // bring the non-zero to the beginning
      pointer++;
    }
    for (let i = pointer; i < array.length; i++) {
      // convert rest of the elements to the zero from where the pointer is
    }
    array[i] = 0;
  }
  return array;
};

console.log(zero([0, 2, 3, 0, 1, 5]));
