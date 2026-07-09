const NoRepeating = (array) =>{
 let seen = {}
 let left = 0;
 let max = 0;
 
 for(let i=0;i<array.length;i++){
    let char = array[i]
    console.log(char)

    if(seen[char]>=left){
        left = seen[char]
    }
    seen[char] = i

    let lenght = i - left + 1
    if(lenght>max){
        max = lenght
    }

 }
 return max


}
console.log(NoRepeating("ababcdbb"))
