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
      str += "0";
    } else {
      let temp = "";

      let digit = num / 10;
      temp = String.fromCharCode(48 + digit) + temp;
      num = (num + digit) % 10;
      // temp = num.toString();

      str = temp;
    }
    result = result + str + "@" + word;
  }
  return result;
};
