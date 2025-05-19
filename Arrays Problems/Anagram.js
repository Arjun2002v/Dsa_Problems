// Steps to Perform the Problem

// 1. Take two parameters a and b
// 2. Create two objects to store character frequencies for both strings
// 3. Count frequency of each character in both strings using frequency map pattern
// 4. Compare character frequencies between both strings

const Anagram = (a, b) => {
  // If strings have different lengths, they can't be anagrams
  if (a.length !== b.length) return false;

  // Create objects to store character frequencies for both strings
  const one = {};
  const two = {};

  // Count frequency of each character in both strings
  // For example, "racecar" becomes {r:2, a:2, c:2, e:1}
  for (let i = 0; i < a.length; i++) {
    one[a[i]] = (one[a[i]] || 0) + 1;
    two[b[i]] = (two[b[i]] || 0) + 1;
  }

  // Compare character frequencies between both strings
  // If any character has different frequencies, they're not anagrams
  for (let key in one) {
    if (one[key] !== two[key]) {
      return false;
    }
  }
  return true;
};

console.log(Anagram("racecar", "carrace")); //true
console.log(Anagram("jar", "raj")); //false
