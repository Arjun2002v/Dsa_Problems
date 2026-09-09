const generate = (target) =>{
    let result = []

    for(let i=0;i<target;i++){
        let row = [];
        row.push(1);

     for (let j = 1; j < i; j++) {
           row.push(result[i - 1][j - 1] + result[i - 1][j]);


        }
        if(i>0){
            row.push(1)
        }
        result.push(row)
        


    }
    return result

}

console.log(generate(5));