const Encode = (array) => {
  let size = [],
    res = "";

  for (let s of array) {
    size.push(s.length);
  }
  for (let sz of size) {
    res = res + sz;
  }
  res = res + "#";
  for (let s in array) {
    res = res + array[s];
  }
  return res;
};
console.log(Encode(["Leet"]));
