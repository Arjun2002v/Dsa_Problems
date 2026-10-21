const Anagram = (s,t) =>{


let count  = {}

for(let num of s){
    count[num] = (count[num]  || 0) + 1
    console.log(count)
}

for(let num of t){
    count[num] = (count[num] || 0) - 1
    console.log(count)

    if(count[num]<0){
        return false
    }
}
return true








}

console.log(Anagram("listen","silent"))