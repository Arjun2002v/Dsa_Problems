const counter = (nums, target) => {
  let res = [];

  const one = {};
  for (i = 0; i < nums.length; i++) {
    one[nums[i]] = (one[nums[i]] || 0) + 1;
    console.log(one);
  }

  for (let key in one) {
    if (one[key] >= target) {
      res.push(key);
    }
  }
  return res;
};

console.log(counter([1, 1, 2, 3, 4, 5, 5, 5, 6], 3));

//Steps for Problem

//0.Take two params nums and target
//1.Create a map to store the array and to remove the duplicates
//2.using for,loop through the arrays
//3.create a frequency counter to count number of times a number occurs in the array
//4.using for..in loop to iterate over the map
//5.if the frequency of the number is greater than or equal to the target, add the number to the result array
