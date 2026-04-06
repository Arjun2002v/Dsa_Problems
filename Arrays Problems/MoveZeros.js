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


//Step 1 : make a pointer to track the value
//Step 2 : loop through the array
//Step 3 : if not zero then bring the non zero elements to front and increement the pointer
//Step 4 : if zero then bring the zero elements to back and increement the pointer
//Step 5 : return the array


