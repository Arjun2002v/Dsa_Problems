const Encode = (array) => {
  let size = [],
    res = "";

  //Collect the size of the array
  for (let s of array) {
    size.push(s.length);
  }

  //Encode the number of size
  for (let s of size) {
    res = res + s;
  }

  //Use # as a delimiter to differentiate the words and size
  res = res + "#";
  for (let s of array) {
    res = res + s;
  }
  return res;
};
console.log(Encode(["Leet"]));
