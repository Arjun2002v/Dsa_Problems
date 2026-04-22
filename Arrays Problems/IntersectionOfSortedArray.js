const InterSection = (arr1,arr2) =>{

    //Declare 2 pointer and a result array to store the final result 
    let result = []

   let i=0;
   let j = 0;


   while(i<arr1.length && j<arr2.length){
    // if both the array are equal then push to the result arrays
    if(arr1[i]===arr2[j] ){
        result.push(arr1[i])
        i++;
        j++
    }
    //If bigger then move the pointer from the other array 
    else if(arr1[i]>arr2[j]){
        j++

    } else{
        i++
    }


   }

   //Return the result 
   return result

 

}
console.log(InterSection([1,2,3,5,6],[2,3,4,5,6]))