const string = (s, t) => {
  let frequency = {};
  let windowFreq = {};
  let needed = 0;

  // Count required characters
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }

  needed = Object.keys(frequency).length;

  let have = 0;
  let left = 0;
  let min = s.length + 1;
  let start = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    windowFreq[char] = (windowFreq[char] || 0) + 1;

    if (frequency[char] && windowFreq[char] === frequency[char]) {
      have++;
    }

    while (have === needed) {
      let window = right - left + 1;
      if (window < min) {
        min = window;
        start = left;
      }

      let leftChar = s[left];
      windowFreq[leftChar]--;
      if (frequency[leftChar] && windowFreq[leftChar] < frequency[leftChar]) {
        have--;
      }
      left++;
    }
  }

  return min === s.length + 1 ? "" : s.substring(start, start + min);
};

console.log(string("xxy", "xy")); // ✅ Output: "xy"
