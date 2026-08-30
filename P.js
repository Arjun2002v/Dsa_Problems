const NoRepeating = (array) => {
  let max = 0;
  let seen = {};
  let left = 0;

  for (let i = 0; i < array.length; i++) {
    let char = array[i];
    if (seen[char] >= left) {
      left = seen[char];
    }
    seen[char] = i;

    let length = i + left
  }
};
console.log(NoRepeating("ababcdbb"));
