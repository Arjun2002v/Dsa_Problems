const twoSum = (array,target) =>{
    const map = new Map();
    for(let i=0;i<array.length;i++){
        const res = target - array[i]

        if(map.has(res)){
            return [map.get(res),array[i]]
        }else{
            map.set(array[i],i)
        }


    }
    return false



}
console.log(twoSum([1, 2, 3, 4, 5], 5));