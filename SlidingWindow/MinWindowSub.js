const SubString = (s, t) => {
  let frequency = {};
  let windowFreq = {};

  //Frequency Map for t

  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    frequency[char] = (frequency[char] || 0) + 1;

    console.log(frequency[char]);
  }
  let needed = 0;

  //Calculating the needed

  for (let key in frequency) {
    needed++;

    console.log(needed);
  }
  console.log(needed);

  //Sliding Window  Logic

  let right = 0;
  let left = 0;
  let have = 0;
  let min = s.length + 1;
  let minStart = 0;
  while (right < s.length) {
    const char = s[right];
    windowFreq[char] = (windowFreq[char] || 0) + 1;
    console.log(windowFreq[char]);
    if (frequency[char] !== undefined && windowFreq[char] === frequency[char]) {
      have++;
      console.log(windowFreq[char]);
    }
    while (have === needed) {
      let windowsize = right - left + 1;
      if (windowsize < min) {
        min = windowsize;
        minStart = left;
      }
      let leftChar = s[left];
      windowFreq[leftChar] = windowFreq[leftChar] - 1;
      if (windowFreq[leftChar] < frequency[leftChar]) {
        have--;
      }
      left++;
    }
    right++;
  }
  //Returning the result
  if (min === s.length + 1) return "";

  let result = "";
  for (let i = minStart; i < minStart + min; i++) {
    result += s[i];
  }

  return result;
};
console.log(SubString("x", "XY"));
