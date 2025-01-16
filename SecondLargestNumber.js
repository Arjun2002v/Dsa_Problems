// Steps to perform the problem

// 1. Take an array of numbers
// 2.Set the largest and second largest to negative infinity
// 3. Create a map to store the array and to remove the duplicates
// 4. using for,loop through the arrays
// 5. create a variable which store the largest as the current number
// 6. set the second as the largest
// 7.check if the current number is not largest and greater than the second
// 8.Return the second number

const largest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;
  const map = new Map([arr]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
};

console.log(largest([3, 4, 6, 9, 7])); //7

// First Iteration :  3 > -1 => second = -1 , largest = 3
// Second Iteration : 4 > 3 => second = 3 , largest = 4
// Third Iteration : 6 > 4 => second = 4 , largest = 6
//Fourth Iteration : 9 > 6 => second = 6, largest = 9
//Fifth Iteration : 7 > 9 else  7 > 6 =>  second = 7 ,largest = 9
