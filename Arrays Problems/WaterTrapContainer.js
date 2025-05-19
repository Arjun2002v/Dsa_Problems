const Water = (array) => {
  let water = 0;
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] < array[right]) {
      // If left bar is smaller
      if (array[left] >= leftMax) {
        leftMax = array[left]; // Update leftMax
      } else {
        water += leftMax - array[left]; // Add trapped water
      }
      left++; // Move left pointer
    } else {
      // If right bar is smaller or equal
      if (array[right] >= rightMax) {
        rightMax = array[right]; // Update rightMax
      } else {
        water += rightMax - array[right]; // Add trapped water
      }
      right--; // Move right pointer
    }
  }

  return water;
};

console.log(Water([1, 3, 2, 5])); // 1

const Waters = (array) => {
  let total = 0;
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] < array[right]) {
      if (array[left] >= leftMax) {
        leftMax = array[left];
      } else {
        total += leftMax - array[left];
      }
      left++;
    } else {
      if (array[right] >= rightMax) {
        rightMax = array[right];
      } else {
        total += rightMax - array[right];
      }
      right--;
    }
  }
  return total;
};
console.log(Waters([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
