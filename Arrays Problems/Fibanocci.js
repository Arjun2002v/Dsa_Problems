const Fibanooci = (number) =>{
    let result = [0,1]
    for(let i=1;i<number;i++){
    
        result.push(result[i-1]+result[i])
    }
    return result

}
console.log(Fibanooci(3))

//
// [0, 1, 1, 2, 3, 5, 8, 13]