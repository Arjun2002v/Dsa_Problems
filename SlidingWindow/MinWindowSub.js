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

  let right = 0;
  let left = 0;
  let have = 0;
  let min = s.length + 1;
  let minStart = 0;

  //Sliding Window  Logic

  while (right < s.length) {
    const char = s[right];
    windowFreq[char] = (windowFreq[char] || 0) + 1;
    console.log(windowFreq[char]);
    if (frequency[char] !== undefined && windowFreq[char] === frequency[char]) {
      have++;
    }

    //Shrinking the window size

    // Shrink the window as much as possible while it still contains all needed characters
    while (have === needed) {
      // Calculate current window size
      let windowsize = right - left + 1;

      // Update minimum window if this one is smaller
      if (windowsize < min) {
        min = windowsize; // Store new minimum size
        minStart = left; // Store the starting index of this new minimum window
      }

      // Character that will be removed from the left side of the window
      let leftChar = s[left];

      // Decrease its count in the current window frequency
      windowFreq[leftChar] = windowFreq[leftChar] - 1;

      // If this character is required and its count drops below the required frequency,
      // it means we no longer have a valid window
      if (
        frequency[leftChar] !== undefined &&
        windowFreq[leftChar] < frequency[leftChar]
      ) {
        have--; // Reduce the count of satisfied characters
      }

      // Move the left side of the window forward to try and shrink it
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
console.log(SubString("xx", "xy"));

//Steps to perfrom this problem
//1. Count the frequency of both the string s and t
//2. Calculate the needed and have values of both the s and t string
//3. Compare both the needed and have value
//4. If both need and have are equal perform  the sliding window logic by shrinking from left hand side
//5. Then update the window size and return the lowest string value
