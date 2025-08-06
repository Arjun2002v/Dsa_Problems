const Encode = (array) => {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    let length = 0;
    while (word[length] !== undefined) {
      length++;
    }
    let num = length;
    let str = "";
    if (num === 0) {
      str += "0";
    } else {
      let temp = "";
      while (num > 0) {
        let digit = num / 10;
        temp = String.fromCharCode(48 + temp) + digit;
        num = (num - digit) % 10;
      }
      str = temp;
    }
    result += length + "#" + str;
  }
  return result;
};
console.log(Encode(["Nigga", "is", "fast"]));
