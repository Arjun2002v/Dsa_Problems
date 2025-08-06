const Encode = (array) => {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    let length = 0;
    while (word[length] != undefined) {
      length++;
    }
    let num = length;
    let str = "";
    if (num === 0) {
      str = "0";
    }
    // Just a manual version of .toString()
    else {
      let temp = "";
      while (num > 0) {
        let digits = num % 10;
        temp = String.fromCharCode(48 + digits) + temp;
        num = (num - digits) / 10;
      }
      str = temp;
    }
    result = result + str + "#" + word;
  }
  return result;
};
console.log(Encode(["leet", "code", "123"]));
const Decode = (s) => {
  let result = [];
  let i = 0;

  while (s[i] !== undefined) {
    // Step 1: Read length until '@'
    let length = 0;

    while (s[i] !== "@") {
      // Convert char to digit
      let digit = s[i].charCodeAt(0) - 48;
      length = length * 10 + digit;
      i++;
    }

    i++; // Skip '@'

    // Step 2: Read `length` number of characters to get the word
    let word = "";
    let count = 0;
    while (count < length && s[i] !== undefined) {
      word += s[i];
      i++;
      count++;
    }

    // Step 3: Push to result
    // No push → manually build new array
    let newResult = [];
    let j = 0;
    while (result[j] !== undefined) {
      newResult[j] = result[j];
      j++;
    }
    newResult[j] = word;
    result = newResult;
  }

  return result;
};

//Steps to do Encoding the String

//1. Loop through the input the array and count the length manually

//2. Declare num= length and if length = 0 then give str as equal to zero

//3. if not length is equal to zero then manually stringify the array

//4. Then result is added to value of str with "#" and with word

//5. Return the result
