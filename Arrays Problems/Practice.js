const getMaxConsecutiveOnes = (arr) => {
  let max = 0;        // stores best streak
  let count = 0;      // current streak

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;                 // increase streak
  if(count>max){
   max=count
  } // update max if needed
    } else {
      count = 0;               // reset when 0 comes
    }
  }

  return max;
};

console.log(getMaxConsecutiveOnes([1,0,1,1,1,0,1,1,0,0,1,1,1,1]));