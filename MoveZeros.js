const zero = (array) => {
  let pointer = 0; // made a pointer to tack the value
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      // if not zero then bring the non zero elements to front and increement
      array[pointer] = array[i];
      pointer++;
    }
  }
  for (let i = pointer; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
};

console.log(zero([0, 2, 0, 4]));
