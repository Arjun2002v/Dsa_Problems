const Missing = (array) => {
  let num = array.length + 1;
  let result = (num * (num + 1)) / 2;
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return result - total;
};
console.log(Missing([1, 2, 3, 4, 6]));

// Steps to Perform (Considering this is in sequence Number)

//1 formula is used find total and with that the we find the missing elements

//2. we fin the total  sum of existing elements

//3. we substarct the first total with the exising total ti get teh misisng number
