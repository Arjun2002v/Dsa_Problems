
const Max = (array) =>{

let currmax = array[0]
let currmin = array[0]
let max = 0

    for(let i=1;i<array.length;i++){
   let num = array[i]

        if (num < 0) {
            let temp = currmax;
            currmax = currmin;
            currmin = temp;
        }
 
   if(currmax * num > num){
    currmax = currmax * num
   } else{
    currmax = num
   }
   if(currmin * num < num){
    currmin = currmin * num
   } else{
    currmin = num
}
if(currmax>max){
    max = currmax
}


}
return max

}
console.log(Max([2,5,-4,-3]))