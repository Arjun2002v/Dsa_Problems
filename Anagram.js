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
      //one[key] = 2,2,2,1
      //two[key] = 2,2,1,2
      return false;
    }
    // one = {r:2,a:2,c:2,e:1}
    //two = {c:2,:r:2,e:1,a:2}
  }
  return true;
};

console.log(Anagram("racecar", "carrace")); //true
console.log(Anagram("jar", "raj")); //false
