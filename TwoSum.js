const Two = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) {
      return [map.get(res, nums[i])];
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
};

console.log(Two([1, 2, 3, 4, 5], 5));

// Steps to Perform the Problem

// 1. Take two parameters num and a target

// 2. Create a map to store the array and to remove the duplicates

// 3. using for,loop through the arrays

// 4. create a variable which store the target and current number

// 5. the check if the map has the res value in it  using map.has()

// 5.5 if true return the value of res and and particular number

// 6. else add the number to the map using map.set()
