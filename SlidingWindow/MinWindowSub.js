const SubString = (s, t) => {
  let frequency = {};
  let windowFreq = {};

  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    frequency[char] = (frequency[char] || 0) + 1;

    console.log(frequency[char]);
  }
  let needed = 0;

  for (let key in frequency) {
    needed++;

    console.log(needed);
  }

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
    }

    while (have === needed) {
      let windowsize = right - left + 1;

      if (windowsize < min) {
        min = windowsize;
        minStart = left;
      }

      let leftChar = s[left];

      windowFreq[leftChar] = windowFreq[leftChar] - 1;

      if (
        frequency[leftChar] !== undefined &&
        windowFreq[leftChar] < frequency[leftChar]
      ) {
        have--;
      }

      left++;
    }

    right++;
  }

  if (min === s.length + 1) return "";

  let result = "";
  for (let i = minStart; i < minStart + min; i++) {
    result += s[i];
  }

  return result;
};
console.log(SubString("xxy", "xy"));

//Steps to perform this problem
//1. Count the frequency of both the string s and t
//2. Calculate the needed and have values of both the s and t string
//3. Compare both the needed and have value
//4. If both need and have are equal perform  the sliding window logic by shrinking from left hand side
//5. Compare the both frequency map if not equal decrease the have value then continue with the shrinking process until a valid smallest window is being reached
