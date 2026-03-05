const threesum = (array) => {

    let result = []

    // Bubble Sort
    for(let i = 0; i < array.length - 1; i++){
        for(let j = 0; j < array.length - 1 - i; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    console.log("Sorted array:", array)

    // 3Sum logic
    for(let i = 0; i < array.length - 2; i++){

        let left = i + 1
        let right = array.length - 1

        while(left < right){

            let sum = array[i] + array[left] + array[right]

            if(sum > 0){
                right--
            }
            else if(sum < 0){
                left++
            }
            else{
                result.push([array[i], array[left], array[right]])
                left++
                right--
            }
        }
    }

    return result
}

console.log(threesum([-4, -3, -1, 1, 2, 5]))