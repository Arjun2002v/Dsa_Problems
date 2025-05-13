const chunkArray = (array, target) => {
  //Two seperate array one for final result and one for the temp
  let result = [];
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    temp.push(array[i]); // pushing all the element to the temp array
    if (temp.length === target) {
      // if the current length of array is same as target  push to the result array
      result.push(temp);
      temp = []; //empty the temp array
    }
    if (temp.length > 0) {
      result.push(temp);
    }
  }
  return result;
};
console.log(chunkArray([1, 2, 3, 4], 2));
