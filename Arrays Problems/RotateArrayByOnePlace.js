const Rotate = (array) =>{
    for(let i=0;i<array.length-1;i++){
        let  temp = array[0]
        
        array[i] = array[i+1]
        
     
    }
    array[array.length-1] = temp
    return array
  

}
console.log(Rotate([1,2,3,4,5]))