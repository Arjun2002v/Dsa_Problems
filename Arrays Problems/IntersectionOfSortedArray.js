const InterSection = (arr1,arr2) =>{
    let result = []

   let i=0;
   let j = 0;
   while(i<arr1.length && j<arr2.length){
    if(arr1[i]===arr2[j] ){
        result.push(arr1[i])
        i++;
        j++
    }
    if(arr1[i]>arr2[j]){
        j++

    } else{
        i++
    }


   }
   return result

 

}
console.log(InterSection([1,2,3,5,6],[2,3,4,5,6]))