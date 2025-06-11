const SubString = (s, t) => {
  let frequency = {};
  let windowFreq = {};
  let right = 0;
  let left = 0;
  let max = 0;
  let min = s.length + 1;
  let res = [];
  while (right < t.length) {
    let char = t[right];
    frequency[char] = (frequency[char] || 0) + 1;
    right++;
    console.log(frequency[char]);
  }
  let needed = 0;
  for (let key in frequency) {
    needed++;
    console.log(`${key}: ${frequency[key]}`);
    console.log(needed);
  }
  console.log(needed);

  while (right < s.length) {}
};
console.log(SubString("xyz", "xyzabc"));
