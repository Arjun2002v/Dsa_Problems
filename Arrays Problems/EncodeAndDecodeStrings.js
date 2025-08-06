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

const Decode = (array) => {};

//Steps to do Encoding the String

//1. Loop through the input the array and count the length manually

//2. Declare num= length and if length = 0 then give str as equal to zero

//3. if not length is equal to zero then manually stringify the array

//4. Then result is added to value of str with "#" and with word

//5. Return the result
