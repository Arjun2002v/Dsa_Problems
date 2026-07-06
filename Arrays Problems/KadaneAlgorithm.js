const Kadane = (array) => {
  let max = array[0];
  let temp = array[0];

  for (let i = 1; i < array.length; i++) {
    if (temp + array[i] > array[i]) {
      temp = temp + array[i];
    } else {
      temp = array[i];
    }

    // moved inside the loop — check after every update, not just at the end
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

console.log(Kadane([-4, -3, -1, 1, 2, 5])); // 8 → [1, 2, 5]