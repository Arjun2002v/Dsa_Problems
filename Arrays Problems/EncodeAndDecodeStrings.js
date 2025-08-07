const Encode = (array) => {
  let size = [];
  let result = "";

  //Collect the sizes
  for (let s of array) {
    size.push(s.length);
  }
  //Encode the size
  for (let sz of size) {
    result = result + sz;
  }

  result = result + "#";

  //Append and join everything
  for (let s of array) {
    result += s;
  }
  return result;
};
console.log(Encode(["Leet"]));

const Decode = (array) => {};
