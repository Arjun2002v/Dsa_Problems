const Missing = (array) =>{
  let total = 0
  let num = array.length + 1

  let sum =  num *(num+1)/2
  console.log(sum)

  for(let i=0;i<array.length;i++){
     total = total = array[i]
     
  }
  console.log(sum - total)
  return sum - total

}
console.log(Missing([1, 2, 3, 4, 6]));