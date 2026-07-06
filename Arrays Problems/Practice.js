const Three = (array) =>{
let max = array[0];
let temp = array[0];

for(let i=1;i<array.length;i++){
    if(temp + array[i]>array[i]){
    temp = temp + array[i]

    }else{
        temp = array[i]



    }
    if(max>temp){
        max = temp
    }
    
    
    
}
return max

}

console.log(Three([-4 - 3, -1, 1, 2, 5])); // Output: 6 (from subarray [2, 4])