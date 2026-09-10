const Longest = (array) => {
  const map = {};
  let max = 0;
  let temp = 0;

  for (let i = 0; i < array.length; i++) {
    map[array[i]] = true;
  }
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    temp = 1;
    while (map[current + 1]) {
      current = current + 1;
      temp = temp + 1;
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};
console.log(Longest([10, 5, 6, 2, 1, 3, 4]));
