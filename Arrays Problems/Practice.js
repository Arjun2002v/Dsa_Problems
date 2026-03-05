const threeSum = (array) =>{
let result = []
for(let i=0;i<array.length-2;i++){
    let right = array.length - 1;
    let left= i + 1;
  while(left<right){
        let sum = array[left] + array[right] + array[i]
   
        if(sum===0){
            result.push([array[i],array[left],array[right]])
            left++;
            right-- 
        }
         else if(sum<0){
            left++
         } else{
            right--
         }
    }
     return result


}

}
console.log(threeSum([-4, -3, -1, 1, 2, 5]))