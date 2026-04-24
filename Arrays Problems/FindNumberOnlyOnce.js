const FindNumberMissingOnce = (array) =>{

    let frequency = {}

    for(let num of array){
        frequency[num] = (frequency[num]+1)||0

        console.log(frequency)

    }

    for(let num in frequency){
      if(frequency[num]===0){
        return num
      }

    }
} 
console.log(FindNumberMissingOnce([1,1,2,3,3,5,5]))