//Remove the duplicate from the array

// IF there is a duplicate in array it should be replace with the original number

const duplicate = (nums) => {
  if (nums.length == 0) {
    // edge case
    return false;
  }
  let i = 0; // first pointer
  for (let j = 1; j < nums.length; j++) {
    //second pointer
    if (nums[i] !== nums[j]) {
      i++; // if not equal increment first pointer
      nums[i] = nums[j]; //and replace it with current number for ignore process
    }
  }
  return i + 1; // return the result
};

console.log(duplicate([0, 0, 2, 3, 4, 4, 4, 5, 6]));
