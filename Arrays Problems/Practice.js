const Buy = (array) =>{

    let temp = 0;
    let max = 0; 

    let left = 0;
    let right =  1;


for(let i=0;i<array.length;i++){
    if(array[left]<array[right]){
        temp = array[right] - array[left]
        right--
    }
    left++

    if(temp>max){
        max = temp
    }
}
return max


}

console.log(Buy([7, 1, 5, 3, 6, 4]))