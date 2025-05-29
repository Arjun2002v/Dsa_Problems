const Longest = (array) => {
  let map = {};
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    map[array[i]] = true;
  }
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let temp = 1;

    while (map[current + 1]) {
      current = current + 1;
      temp = temp + 1;
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};
console.log(Longest([10, 5, 6, 2, 1, 3]));

//Steps to Perform the Problem
//1.Create a map to check for the sequence
//2.Set the elements to the map using true value
//3.Create three vairlable one for max,temp and the current value in the array
//4.Set the current element to the current variable
//5.if map contaiins the element +1 ie:for 2 for 1 , 4 for 3 increent the current value and the temp
//6. if temp> max store max as temp and return the max value
