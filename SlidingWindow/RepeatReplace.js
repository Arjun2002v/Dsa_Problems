const Replace = (array, k) => {
  let left = 0;
  let right = 0;
  let maxfreq = 0;
  let maxlength = 0;
  let frequency = {};
  while (right < array.length) {
    let char = array[right];

    //Counting the frequency of the characters
    frequency[char] = (frequency[char] || 0) + 1;
    console.log(frequency[char]);

    //Update the frequency Map
    if (frequency[char] > maxfreq) {
      maxfreq = frequency[char];
    }
    console.log(maxfreq);

    //Update the window size

    let window = right - left;
    if (window - maxfreq > k) {
      frequency[array[left]]--;
      left++;
      console.log(window);
    } else {
      if (window > maxlength) {
        maxlength = window;
      }
    }
    right++;
  }
  return maxlength;
};
console.log(Replace("ABAAAB", 1));

//Steps to perfrom this problem
//1. Count the frequency of the characters
//2. Compare the frequency and update the max
//3. Update the window size and perform sliding window protocol
