const Longest = (array) => {
  let currsum = array[0];
  let maxSumm = 0

  for(let i=1;i<array.length;i++){
    if(currsum + array[i]>array[i]){
      currsum = currsum + array[i]
    } else{
      currsum = array[i]
    }




  }
  if(currsum>maxSumm){
    maxSumm = currsum
  }

};
console.log(Longest([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


