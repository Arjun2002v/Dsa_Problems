const Palindrome = (array) => {
  //using two pointer approach one at the start and one at the end
  let i = 0;
  let j = array.length - 1;

  if (i < j) {
    if (array[i] !== array[j]) {
      // is not equal return false
      return false;
    } else {
      //increment till the last
      i++;
      j--;
    }
    return true;
  }
};
console.log(Palindrome("racecar")); // true
console.log(Palindrome("hindi")); //false
