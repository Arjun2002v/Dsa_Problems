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

// First Loop : res = 5-1 = 4
// Second Loop : res = 5-2 = 3
// Third Loop : res = 5-3 = 2 => So since 2 is stored in the Map hence we get the result
