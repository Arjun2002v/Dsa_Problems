const Anagram = (a, b) => {
  //create a map to store the arrays
  const one = {};
  const two = {};

  //loop it through the arrays
  for (let i = 0; i < a.length; i++) {
    //to count the frequency in the string
    one[a[i]] = (one[a[i]] || 0) + 1;
    two[b[i]] = (two[b[i]] || 0) + 1;
  }

  //compare the frequencies of the two strings
  for (let key in one) {
    if (one[key] !== two[key]) {
      return false;
    }
  }
  return true;
};
console.log(Anagram("jar", "raj")); //false
console.log(Anagram("racecar", "carrace")); //truegit 
