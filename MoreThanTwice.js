const moreThanTwice = (array) => {
  const frq = {};
  for (let num of array) {
    frq[num] = (frq[num] || 0) + 1;
  }
  for (let num of array) {
    if (frq[num] <= 1) {
      return num;
    }
  }
  return null;
};
console.log(moreThanTwice([1, 3, 4, 3, 1]));

// Step to  moreThanTwice

// using frequec counter pattern iam counting the number of times each of them occurs
// then iam just returning the num which occurs only one time
