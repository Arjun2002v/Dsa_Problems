const maxArray = (num) => {
    let max = num.length;
    for (let i = 0; i < num.length; i++) {
        let sum = 0;
       for (let j = i; j < num.length; j++){
        sum+=num[j]
        if(sum>max){
            max=sum;
        }
        
i       
       }
        
    }
    return max

};
console.log(maxArray([1, -2, 3, -1, 6]));
