const Dutch = (array) =>{

  let right = array.length-1;
  let left = 0;
  let mid = 0;

  while(mid<=right){
    if(array[mid]===0){
      [array[left],array[mid]] = [array[mid],array[left]];
      mid++;
      left++
    } else if(array[mid]===1){
      mid++
    } else{
      [array[mid],array[right]] = [array[right],array[mid]]
      right--;
    
    }
  }
  return array

}
console.log(Dutch([2,0,1,0,1,0]))