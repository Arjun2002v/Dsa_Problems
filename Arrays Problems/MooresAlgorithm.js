const MooresAlgo = (array) =>{
    let target = array.length/2

    const frequecny = {};
    
    for(let num of array ){
        frequecny[num] = (frequecny[num]||0)+1; 
        console.log(frequecny[num])
        if(frequecny[num]>target){
            return num
        }
    }


}
console.log(MooresAlgo([2,2,3,3,3,3,3,3,1,2,2]))