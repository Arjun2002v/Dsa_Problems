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

//Steps to this problem Eyes

//1. Create two frequency map counters
//2. Calculate the frequency of t array
//3. Calculate the needed value of the array
//4. After that calculate the frequency of s length
//5. Calculate the have value
//6. If the have is equal to need then shrink the window size and update the min and start
//7. Then remove the leftmost element in the latest frequency map
//8. Then calculate if both the frequency are not equal then decrease the value of have
//9. increment the left pointer and then continue the shrinking of the window
