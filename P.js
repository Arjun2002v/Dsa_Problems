const twoSum = (array, target) => {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    let sum = target - array[i];
    if (map.has(sum)) {
      return [map.get(sum), i];
    } else {
      map.set(array[i], i);
    }
  }
  return false;
};

console.log(twoSum([1, 2, 3, 4, 5], 5));
