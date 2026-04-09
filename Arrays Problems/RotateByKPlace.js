const RotateByKPlace = (array,num) =>{
    let n = array.length;
    let target = num % n;
  
    let temp = []

    //Temp to store the first number of target elements
    for(let i=0;i<target;i++){
        temp.push(array[i])
    }
  

    // Shifting the rest of the elements to the start of the array
    for(let i=target;i<n;i++){
    array[i-target] = array[i]
     }

     //Put the temp back to the K places

     for(let i=n-target;i<n;i++){
     array[i] = temp[i-(n-target)]
        console.log(i-(n-target))


     }
     return array
     
   

}

console.log(RotateByKPlace([1,2,3,4,5,6,7],10))