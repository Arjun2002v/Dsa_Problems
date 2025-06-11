const SubString = (s, t) => {
  let frequency = {};
  let right = 0;
  let left = 0;
  let max = 0;
  let res = [];
  while (right < t.length) {
    let char = t[right];
    frequency[char] = (frequency[char] || 0) + 1;
  }
};
console.log(SubString("xyz", "xyzabc"));
