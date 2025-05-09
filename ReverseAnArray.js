const Rotate = (array, target) => {
  const num = array.length;
  const k = target % num;
  for (let i = 0; i < k; i++) {
    let last = array[num - 1]; // remove the last element and storing it in a variable
    for (let j = num - 1; j > 0; j--) {
      // swapping the postion of element to right

      array[j] = array[j - 1]; // array[4] value becomes array[3] value
    }
    array[0] = last; // swap the first element to the last element stored before
  }
  return array;
};
console.log(Rotate([1, 2, 3, 4, 5], 3));




const Rot = (array,target) =>{

  const res = array.length;
  const k = target% res;

  for (let i = 0; i < k; i++) {
    last = array[res-1];
    for (let j = res-1; j > 0; j--) {
      array[j] = array[j-1]
      
    }
    last = array[0]
    
    
  }
  return array

}

console.log(Rot([1,2,4,5,6],2));