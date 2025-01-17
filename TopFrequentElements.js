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
